import {
  coinbaseWallet,
  magicLink,
  metamaskWallet,
  rainbowWallet,
  safeWallet,
  ThirdwebAuthConfig,
  walletConnect,
} from "@thirdweb-dev/react";
import { DAppMetaData } from "@thirdweb-dev/wallets";
import {
  generateUrl,
  MAGIC_API_KEY,
  THIRDWEB_CLIENT_ID,
  WALLET_CONNECT_PROJECT_ID,
} from "@/lib";

export const useProviderConfig = () => {
  const projectId = WALLET_CONNECT_PROJECT_ID;
  const activeChain = undefined; // Specify a chain here if you want to force the user onto a specific chain

  const authConfig: ThirdwebAuthConfig = {
    domain: generateUrl(),
    authUrl: "/api/auth",
  };

  const dAppMetadata: DAppMetaData = {
    name: "IPFS://DRIVE",
    description: "A new way to store your data",
    url: generateUrl(),
  };

  const supportedWallets = [
    magicLink({ apiKey: MAGIC_API_KEY, type: "connect" }),
    metamaskWallet({ projectId }),
    walletConnect({ projectId }),
    coinbaseWallet(),
    rainbowWallet({ projectId }),
    safeWallet(),
  ];

  return {
    projectId,
    activeChain,
    authConfig,
    dAppMetadata,
    supportedWallets,
    clientId: THIRDWEB_CLIENT_ID,
  };
};
