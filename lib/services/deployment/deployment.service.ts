import {
  ThirdwebSDK,
  ChainIdOrNumber,
  TokenContractDeployMetadata,
} from "@thirdweb-dev/sdk";
import { Contract, Signer } from "ethers";

import { DeploymentServiceInterface } from "./deployment.service.interface";

import {
  Drive,
  GetDrivesForAddressResponse,
  THIRDWEB_CLIENT_ID,
  TW_CLONE_FACTORY_ADDRESS,
  TW_FACTORY_ABI,
  VERCEL_URL,
  clientThirdWebSDK,
  environmentDeploymentNetworks,
  indexingStartBlocks,
} from "@/lib";

export class DeploymentService implements DeploymentServiceInterface {
  private signer: Signer;

  private sdk: ThirdwebSDK;

  constructor(signer: Signer, network?: ChainIdOrNumber) {
    this.signer = signer;
    this.sdk = clientThirdWebSDK(this.signer, network);
  }

  async deployDriveContract(
    data: Partial<TokenContractDeployMetadata>
  ): Promise<string> {
    const metadata: TokenContractDeployMetadata = {
      name: data.name || "Drive",
      symbol: data.symbol || "ipfs-drive",
      app_uri: VERCEL_URL,
      primary_sale_recipient: await this.signer.getAddress(),
    };

    return this.sdk.deployer.deployNFTCollection(metadata);
  }

  async getDrivesForAddress(
    address: string
  ): Promise<GetDrivesForAddressResponse> {
    const drives = (
      await Promise.all(
        environmentDeploymentNetworks.flatMap(
          async (network): Promise<Drive[]> => {
            const sdk = new ThirdwebSDK(network, {
              clientId: THIRDWEB_CLIENT_ID,
            });
            const provider = sdk.getProvider();

            const contract = new Contract(
              TW_CLONE_FACTORY_ADDRESS,
              TW_FACTORY_ABI,
              provider
            );

            if (!(await contract.deployed())) {
              console.log("No proxy found on ", network.name);
              return [];
            }

            const filter = contract.filters.ProxyDeployed(null, null, address);
            const startBlock = indexingStartBlocks[network.chainId]; // Used to minimize query time
            const logs = await contract.queryFilter(filter, startBlock);

            const contractsWithMetadata = (
              await Promise.all(
                logs.map(async (log) => {
                  const address = log.args?.proxy;

                  const _contract = await sdk.getContract(address);
                  const metadata = await _contract.metadata.get();

                  return { address, metadata };
                })
              )
            ).filter((contract) => contract.metadata.symbol === "ipfs-drive");

            return contractsWithMetadata.map((drive) => ({
              name: drive.metadata.name,
              address: drive.address,
              network: network.chainId,
              metadata: drive.metadata,
            }));
          }
        )
      )
    ).flat();

    return { drives } satisfies GetDrivesForAddressResponse;
  }
}
