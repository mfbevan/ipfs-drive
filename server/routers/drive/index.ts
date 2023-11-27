import { Contract } from "ethers";

import { router, procedure } from "../../trpc";

import {
  Drive,
  SepoliaTestnet,
  TW_CLONE_FACTORY_ADDRESS,
  TW_FACTORY_ABI,
  getDrivesForAddressRequest,
  getDrivesForAddressResponse,
  serverThirdWebSDK,
} from "@/lib";
export const driveService = router({
  /**
   * Get all of the drives for an address
   */
  getDrivesForAddress: procedure
    .input(getDrivesForAddressRequest)
    .output(getDrivesForAddressResponse)
    .query(async ({ input }) => {
      const { address } = input;

      const networksToCheck = [SepoliaTestnet];

      const drives = (
        await Promise.all(
          networksToCheck.flatMap(async (network): Promise<Drive[]> => {
            const sdk = serverThirdWebSDK(network.chainId);
            const provider = sdk.getProvider();

            // const contracts = await sdk.getContractList(address);
            // console.log(contracts);
            // TODO get above function to work properly

            const contract = new Contract(
              TW_CLONE_FACTORY_ADDRESS,
              TW_FACTORY_ABI,
              provider
            );

            if (!(await contract.deployed())) return [];

            const filter = contract.filters.ProxyDeployed(null, null, address);
            const logs = await contract.queryFilter(filter);

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
          })
        )
      ).flat();

      return { drives };
    }),
});
