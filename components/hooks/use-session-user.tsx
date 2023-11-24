import { useAddress } from "@thirdweb-dev/react";

export const useSessionUser = () => {
  const address = useAddress();

  return {
    address,
  };
};
