import { Drive, disableAllQueryRefetch } from "@/lib";
import { trpc } from "@/utils";

export const DRIVE_LIST_CACHE_KEY = "drive-list";

export const useDriveList = (address: string) => {
  const { data, ...response } = trpc.drive.getDrivesForAddress.useQuery(
    { address },
    {
      ...disableAllQueryRefetch,
      enabled: !!address,
    }
  );

  const drives: Drive[] = data?.drives ?? [];

  return {
    drives,
    ...response,
  };
};
