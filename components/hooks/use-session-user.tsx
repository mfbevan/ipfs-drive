import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";

export const useSessionUser = () => {
  const address = useAddress();
  const status = useConnectionStatus();

  const isConnected = status === "connected";

  return {
    address,
    isConnected,
    status,
  };
};
