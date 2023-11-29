import { useQuery } from "@tanstack/react-query";
import { useSigner } from "@thirdweb-dev/react";

import { ContentService } from "@/lib";

export interface UseDriveFilesProps {
  drive: string;
  chainId: number;
}

const USE_DRIVE_FILES_QUERY_KEY = "drive-files";

export const useDriveFiles = ({ drive, chainId }: UseDriveFilesProps) => {
  const signer = useSigner();

  return useQuery({
    queryKey: [USE_DRIVE_FILES_QUERY_KEY, drive, chainId],
    queryFn: async () => {
      const contentService = new ContentService(signer!, chainId);
      return contentService.getFilesForDrive(drive, chainId);
    },
    enabled: !!signer && !!drive && !!chainId,
  });
};
