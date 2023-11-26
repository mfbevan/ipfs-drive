import { WalletAddress, isEnsName, resolveEns } from "@thirdweb-dev/react";

export class EnsService {
  /**
   * Resolves an ENS name to an address, throwing an error if the name cannot be resolved
   * @param address The address or ENS name to resolve
   * @returns The resolved address
   */
  public static async resolveEnsName(address: WalletAddress): Promise<string> {
    if (!isEnsName(address)) {
      return address;
    }

    const resolvedAddress = await resolveEns(address);
    if (!resolvedAddress) {
      throw new Error(`Failed to resolve ENS name ${address}`);
    }

    return resolvedAddress;
  }
}
