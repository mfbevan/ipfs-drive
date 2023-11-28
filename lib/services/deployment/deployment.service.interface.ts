import { TokenContractDeployMetadata } from "@thirdweb-dev/sdk";

import { GetDrivesForAddressResponse } from "@/lib";

export interface DeploymentServiceInterface {
  /**
   * Deploy a new ERC721 Drive contract
   * @param data The metadata to add to the contract
   * @returns The address of the deployed contract
   */
  deployDriveContract(
    data: Partial<TokenContractDeployMetadata>
  ): Promise<string>;

  /**
   * Retrieve the addresses of all drive contracts deployed by a user
   * @param address The address of the deployer
   */
  getDrivesForAddress(address: string): Promise<GetDrivesForAddressResponse>;
}
