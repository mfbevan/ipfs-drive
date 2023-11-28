import { useMutation } from "@tanstack/react-query";
import { useStorage } from "@thirdweb-dev/react";
import FileDownload from "js-file-download";

export const useIpfsDownload = (cid: string) => {
  const storage = useStorage();

  const _onDownload = async () => {
    const response = await storage?.download(cid);
    if (!response) return;
    FileDownload(await response.arrayBuffer(), cid ?? "cid");
  };

  const { mutateAsync, ...response } = useMutation({
    mutationFn: _onDownload,
  });

  const onDownload = async () => {
    await mutateAsync();
  };

  return { onDownload, ...response };
};
