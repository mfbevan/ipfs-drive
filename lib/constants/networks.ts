import {
  Base,
  BaseGoerli,
  Ethereum,
  Goerli,
  Mumbai,
  Optimism,
  OptimismGoerli,
  Polygon,
  Sepolia,
} from "@thirdweb-dev/chains";
import { ChainIdOrNumber } from "@thirdweb-dev/sdk";

import { ENABLE_TESTNETS } from ".";

export interface DeploymentNetwork {
  name: string;
  chainId: ChainIdOrNumber;
}

export const deploymentMainnetNetworks: DeploymentNetwork[] = [
  Ethereum,
  Optimism,
  Polygon,
  Base,
];

export const deploymentTestNetworks: DeploymentNetwork[] = [
  Goerli,
  Sepolia,
  OptimismGoerli,
  Mumbai,
  BaseGoerli,
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
  [Ethereum.chainId]: {
    name: "Ethereum",
    image: "/networks/ethereum.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/ethereum/",
  },
  [Polygon.chainId]: {
    name: "Polygon",
    image: "/networks/polygon.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/polygon/",
  },
  [Optimism.chainId]: {
    name: "Optimism",
    image: "/networks/optimism.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/optimism/",
  },
  [Base.chainId]: {
    name: "Base",
    image: "/networks/base.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://opensea.io/assets/base/",
  },
  [Sepolia.chainId]: {
    name: "Sepolia",
    image: "/networks/ethereum.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/sepolia/",
  },
  [Goerli.chainId]: {
    name: "Goerli",
    image: "/networks/ethereum.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/goerli/",
  },
  [Mumbai.chainId]: {
    name: "Mumbai",
    image: "/networks/polygon.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/mumbai/",
  },
  [OptimismGoerli.chainId]: {
    name: "Optimism Goerli",
    image: "/networks/optimism.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/optimism-goerli/",
  },
  [BaseGoerli.chainId]: {
    name: "Base Goerli",
    image: "/networks/base.svg",
    colorScheme: "gray",
    openSeaBaseUrl: "https://testnets.opensea.io/assets/base/",
  },
} as const;

/**
 * The block number that indexing should start at for each network
 * @param chainId
 * @returns The block number to start indexing at
 */
export const indexingStartBlocks: Record<number, number> = {
  [Ethereum.chainId]: 18669824,
  [Polygon.chainId]: 50490493,
  [Optimism.chainId]: 112786342,
  [Base.chainId]: 7191076,
  [Sepolia.chainId]: 4769661,
  [Goerli.chainId]: 10121450,
  [Mumbai.chainId]: 42905552,
  [OptimismGoerli.chainId]: 17871705,
  [BaseGoerli.chainId]: 12988947,
} as const;
