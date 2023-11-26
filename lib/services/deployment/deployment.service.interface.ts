import { TokenContractDeployMetadata } from "@thirdweb-dev/sdk";

export interface DeploymentServiceInterface {
  /**
   * Deploy a new ERC721 Drive contract
   */
  deployDriveContract(
    data: Partial<TokenContractDeployMetadata>
  ): Promise<string>;
}
