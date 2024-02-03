import { useAddress, useSigner } from "@thirdweb-dev/react";
import { useEffect, useMemo, useState } from "react";

import { useCache } from ".";

import { DeploymentService, Drive, GetDrivesForAddressResponse } from "@/lib";

export const DRIVE_LIST_CACHE_KEY = "drive-list";

export const useDriveList = () => {
  const signer = useSigner();
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(false);
  const { getCache, setCache } = useCache<GetDrivesForAddressResponse>(
    `${DRIVE_LIST_CACHE_KEY}:${address ?? "unknown"}`
  );
  const [cached, setCached] = useState<GetDrivesForAddressResponse>();

  useEffect(() => {
    const cache = getCache();
    if (cache) {
      setCached(cache);
    } else {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run automatically on page load
  }, [address]);

  const refetch = async () => {
    if (!signer) return;
    setIsLoading(true);
    const service = new DeploymentService(signer);
    const driveList = await service.getDrivesForAddress(
      await signer.getAddress()
    );
    setCache(driveList);
    setCached(driveList);
    setIsLoading(false);
  };

  const drives: Drive[] = useMemo(
    () => (cached ? cached.drives : []),
    [cached]
  );
  const isFetching = isLoading && !cached;
  const isFetched = !isLoading && !!cached;

  return { drives, refetch, isLoading, isFetching, isFetched };
};
