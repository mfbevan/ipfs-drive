import { Contract } from "ethers";

import { router, procedure } from "../../trpc";

import {
  Drive,
  GetDriveFilesResponse,
  GetDrivesForAddressResponse,
  SepoliaTestnet,
  TW_CLONE_FACTORY_ADDRESS,
  TW_FACTORY_ABI,
  getDriveFilesRequest,
  getDriveFilesResponse,
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

      return {
        drives: [
          {
            name: "asds",
            address: "0xA00072f482B9CCCB382E1a2157D2B52fc2Adc9A9",
            network: 11155111,
            metadata: {
              name: "asds",
              seller_fee_basis_points: 0,
              fee_recipient: "0x0000000000000000000000000000000000000000",
              symbol: "ipfs-drive",
              platform_fee_basis_points: 0,
              platform_fee_recipient:
                "0x0000000000000000000000000000000000000000",
              primary_sale_recipient:
                "0xA1024a7b50a59b07F46F3De40234c3479b5A5908",
              trusted_forwarders: [],
            },
          },
        ],
      } satisfies GetDrivesForAddressResponse;

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

      return { drives } satisfies GetDrivesForAddressResponse;
    }),

  /**
   * Get all of the files for a drive
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
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
        {
          content: "ipfs://QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
          metadata: {
            name: "asdasd",
            description: "asdasd",
            createdAt: "asdasd",
            contentType: "asdasd",
          },
        },
      ];

      return { files } satisfies GetDriveFilesResponse;
    }),
});
