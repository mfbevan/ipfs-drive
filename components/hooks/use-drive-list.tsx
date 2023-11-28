import { useSigner } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

import { useCache } from ".";

import { DeploymentService, Drive, GetDrivesForAddressResponse } from "@/lib";

export const DRIVE_LIST_CACHE_KEY = "drive-list";

export const useDriveList = () => {
  const signer = useSigner();
  const [isLoading, setIsLoading] = useState(false);
  const { getCache, setCache } =
    useCache<GetDrivesForAddressResponse>(DRIVE_LIST_CACHE_KEY);
  const [cached, setCached] = useState<GetDrivesForAddressResponse>();

  useEffect(() => {
    const cache = getCache();
    if (cache) {
      setCached(cache);
    } else {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run automatically on page load
  }, []);

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

  const drives: Drive[] = cached ? cached.drives : [];
  const isFetching = isLoading && !cached;
  const isFetched = !isLoading && !!cached;

  return { drives, refetch, isLoading, isFetching, isFetched };
};
