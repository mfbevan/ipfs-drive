import {
  bloctoWallet,
  coinbaseWallet,
  embeddedWallet,
  frameWallet,
  localWallet,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  safeWallet,
  ThirdwebAuthConfig,
  trustWallet,
  walletConnect,
  zerionWallet,
} from "@thirdweb-dev/react";
import { DAppMetaData } from "@thirdweb-dev/wallets";

import {
  generateUrl,
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
    metamaskWallet({ projectId }),
    walletConnect({ projectId }),
    coinbaseWallet(),
    rainbowWallet({ projectId }),
    safeWallet(),
    localWallet(),
    embeddedWallet({
      auth: { options: ["email", "apple", "facebook", "google"] },
    }),
    trustWallet(),
    zerionWallet(),
    bloctoWallet(),
    frameWallet(),
    rainbowWallet(),
    phantomWallet(),
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
