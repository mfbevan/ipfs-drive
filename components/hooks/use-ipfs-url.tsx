import { useStorage } from "@thirdweb-dev/react";

export const useIpfsUrl = (cid: string) => {
  const storage = useStorage();
  return storage?.resolveScheme(cid) as string;
};
