import { useAccount } from "wagmi";
import TokenInfo from "./tokeninfo";
import RequestTokens from "./requesttoken";

function WalletInfo() {
    const { address, isConnecting, isDisconnected, chain } = useAccount();
    if (address)
      return (
        <div>
            <TokenInfo address={address as `0x${string}`}></TokenInfo>
            <RequestTokens address={address as `0x${string}`} amount={100}></RequestTokens>
        </div>
      );
    if (isConnecting)
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    if (isDisconnected)
      return (
        <div>
          <p>Wallet disconnected. Connect wallet to continue</p>
        </div>
      );
    return (
      <div>
        <p>Connect wallet to continue</p>
      </div>
    );
}

export default WalletInfo;