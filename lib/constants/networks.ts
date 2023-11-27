import { ChainId, ChainIdOrNumber } from "@thirdweb-dev/sdk";

import { ENABLE_TESTNETS } from ".";

export interface DeploymentNetwork {
  name: string;
  chainId: ChainIdOrNumber;
}

// MAINNET

export const EthereumMainnet: DeploymentNetwork = {
  name: "Ethereum",
  chainId: ChainId.Mainnet,
};

export const OptimismMainnet: DeploymentNetwork = {
  name: "Optimism",
  chainId: ChainId.Optimism,
};

export const PolygonMainnet: DeploymentNetwork = {
  name: "Polygon",
  chainId: ChainId.Polygon,
};

export const BaseMainnet: DeploymentNetwork = {
  name: "Base",
  chainId: 8453,
};

// TESTNET

export const SepoliaTestnet: DeploymentNetwork = {
  name: "Sepolia",
  chainId: 11155111,
};

export const OptimismSepoliaTestnet: DeploymentNetwork = {
  name: "Optimism Sepolia",
  chainId: 11155420,
};

export const MumbaiTestnet: DeploymentNetwork = {
  name: "Mumbai",
  chainId: ChainId.Mumbai,
};

export const BaseSepoliaTestnet: DeploymentNetwork = {
  name: "Base Sepolia",
  chainId: 84532,
};

export const deploymentMainnetNetworks: DeploymentNetwork[] = [
  EthereumMainnet,
  OptimismMainnet,
  PolygonMainnet,
  BaseMainnet,
];

export const deploymentTestNetworks: DeploymentNetwork[] = [
  SepoliaTestnet,
  OptimismSepoliaTestnet,
  MumbaiTestnet,
  BaseSepoliaTestnet,
];

export const allDeploymentNetworks: DeploymentNetwork[] = [
  ...deploymentMainnetNetworks,
  ...deploymentTestNetworks,
];

export const environmentDeploymentNetworks: DeploymentNetwork[] =
  ENABLE_TESTNETS ? deploymentTestNetworks : deploymentMainnetNetworks;

export const networkData: Record<
  number,
  {
    name: string;
    image: string;
    colorScheme: string;
    openSeaBaseUrl: string;
  }
> = {
  [EthereumMainnet.chainId]: {
    name: "Ethereum",
    image: "/networks/ethereum.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/ethereum/",
  },
  [PolygonMainnet.chainId]: {
    name: "Polygon",
    image: "/networks/polygon.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/polygon/",
  },
  [OptimismMainnet.chainId]: {
    name: "Optimism",
    image: "/networks/optimism.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/optimism/",
  },
  [BaseMainnet.chainId]: {
    name: "Base",
    image: "/networks/base.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/base/",
  },
  [SepoliaTestnet.chainId]: {
    name: "Sepolia",
    image: "/networks/ethereum.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/goerli/",
  },
  [MumbaiTestnet.chainId]: {
    name: "Mumbai",
    image: "/networks/polygon.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/mumbai/",
  },
  [OptimismSepoliaTestnet.chainId]: {
    name: "Optimism Sepolia",
    image: "/networks/optimism.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/optimism-goerli/",
  },
  [BaseSepoliaTestnet.chainId]: {
    name: "Base Sepolia",
    image: "/networks/base.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/base/",
  },
} as const;
