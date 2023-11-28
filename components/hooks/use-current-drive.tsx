import { useChainId, useSwitchChain } from "@thirdweb-dev/react";

import { usePath, useQueryParams } from ".";

export const useCurrentDrive = () => {
  const { path } = usePath();
  const switchChain = useSwitchChain();
  const currentChainId = useChainId();

  const { network: chainId, address: currentDrive } = useQueryParams([
    "network",
    "address",
  ]);

  const isDrive = path.includes("/drive") && chainId && currentDrive;
  const isNetworkMismatch = Number(chainId) !== currentChainId;

  const switchToChain = async () => {
    if (isNetworkMismatch) {
      await switchChain(Number(chainId));
    }
  };

  return { currentDrive, chainId, isDrive, isNetworkMismatch, switchToChain };
};
