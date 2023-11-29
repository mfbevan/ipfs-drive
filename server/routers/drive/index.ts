import { Contract } from "ethers";

import { router, procedure } from "../../trpc";

import {
  Drive,
  GetDriveFilesResponse,
  GetDrivesForAddressResponse,
  TW_CLONE_FACTORY_ADDRESS,
  TW_FACTORY_ABI,
  environmentDeploymentNetworks,
  getDriveFilesRequest,
  getDriveFilesResponse,
  getDrivesForAddressRequest,
  getDrivesForAddressResponse,
  indexingStartBlocks,
  serverThirdWebSDK,
} from "@/lib";

export const driveService = router({
  /**
   * Get all of the drives for an address
   * @deprecated This has been deprecated since local fetching was setup
   */
  getDrivesForAddress: procedure
    .input(getDrivesForAddressRequest)
    .output(getDrivesForAddressResponse)
    .query(async ({ input }) => {
      const { address } = input;

      const drives = (
        await Promise.all(
          environmentDeploymentNetworks.flatMap(
            async (network): Promise<Drive[]> => {
              const sdk = serverThirdWebSDK(network.chainId);
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

              const filter = contract.filters.ProxyDeployed(
                null,
                null,
                address
              );
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
    }),

  /**
   * Get all of the files for a drive
   * @deprecated This will be deprecated after local fetching has been setup
   */
  getDriveFiles: procedure
    .input(getDriveFilesRequest)
    .output(getDriveFilesResponse)
    .query(async ({}) => {
      const files = [
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: new Date(),
            contentType: "content/type",
          },
        },
      ];

      return { files } satisfies GetDriveFilesResponse;
    }),
});
