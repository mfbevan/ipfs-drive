import {
  ThirdwebSDK,
  ChainIdOrNumber,
  TokenContractDeployMetadata,
} from "@thirdweb-dev/sdk";
import { Signer } from "ethers";

import { DeploymentServiceInterface } from "./deployment.service.interface";

import { VERCEL_URL, clientThirdWebSDK } from "@/lib";

export class DeploymentService implements DeploymentServiceInterface {
  private signer: Signer;

  private sdk: ThirdwebSDK;

  constructor(signer: Signer, network: ChainIdOrNumber) {
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
}
