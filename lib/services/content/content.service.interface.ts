import { WalletAddress } from "@thirdweb-dev/react";

import { UploadFileRequest, UploadFileResponse } from "@/lib";

export interface ContentServiceInterface {
  /**
   * Upload a file to the content service and return the CID
   * @param request The request to upload a file
   * @param owner The owner of the file
   * @returns The CID of the metadata file
   */
  uploadFile(
    request: UploadFileRequest,
    owner: WalletAddress
  ): Promise<UploadFileResponse>;
}
