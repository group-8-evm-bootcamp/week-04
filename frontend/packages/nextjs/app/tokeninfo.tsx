import { formatEther } from "viem";
import { useReadContract } from "wagmi";

function TokenInfo(params: { address: `0x${string}` }) {
    return (
      <div className="card w-96 bg-primary text-primary-content mt-4">
        <div className="card-body">
          <h2 className="card-title">Token Balance</h2>
          <TokenName></TokenName>
          <TokenBalance address={params.address} />
        </div>
      </div>
    );
}
  
function TokenName() {
    const { data, isError, isLoading } = useReadContract({
      address: "0x97f7fC5fD2cF11E31053621f9AC5AdCC82895749",
      abi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "name",
    });
  
    const name = typeof data === "string" ? data : 0;
  
    if (isLoading) return <div>Fetching name…</div>;
    if (isError) return <div>Error fetching name</div>;
    return <div>Token name: {name}</div>;
}
  
function TokenBalance(params: { address: `0x${string}` }) {
    const { data, isError, isLoading } = useReadContract({
      address: "0x97f7fC5fD2cF11E31053621f9AC5AdCC82895749",
      abi: [
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "balance",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "balanceOf",
      args: [params.address],
    });

    const balance = data ? formatEther(BigInt(data)) : 0;

    if (isLoading) return <div>Fetching balance…</div>;
    if (isError) return <div>Error fetching balance</div>;
    return <div>Balance: {balance}</div>;
}

export default TokenInfo;