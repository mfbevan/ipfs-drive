import { useChainId, useSwitchChain } from "@thirdweb-dev/react";

import { usePath, useQueryParams } from ".";

export const useCurrentDrive = () => {
  const { path } = usePath();
  const switchChain = useSwitchChain();
  const currentChainId = useChainId();

  const { network, address: currentDrive } = useQueryParams([
    "network",
    "address",
  ]);
  const chainId = Number(network);

  const isDrive = path.includes("/drive") && chainId && currentDrive;
  const isNetworkMismatch = chainId !== currentChainId;

  const switchToChain = async () => {
    if (isNetworkMismatch) {
      await switchChain(chainId);
    }
  };

  return { currentDrive, chainId, isDrive, isNetworkMismatch, switchToChain };
};
