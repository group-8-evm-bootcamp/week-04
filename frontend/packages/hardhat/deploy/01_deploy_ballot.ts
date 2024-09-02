import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { toHex } from "viem";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployBallotContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const tokenContract = await hre.ethers.getContract<Contract>("ERC20Token", deployer);
  const tokenContracAddress = await tokenContract.getAddress();

  const PROPOSALS = ["Cats", "Dogs", "Rats"]
  const PROPOSALS32 = PROPOSALS.map((prop) => toHex(prop, { size: 32 }));

  // Update this lmao
  const targetBlockNumber = 6615216;

  await deploy("TokenizedBallot", {
    from: deployer,
    // Contract constructor arguments
    args: [PROPOSALS32, tokenContracAddress, targetBlockNumber],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

};

export default deployBallotContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags TokenContract
deployBallotContract.tags = ["BallotContract"];
