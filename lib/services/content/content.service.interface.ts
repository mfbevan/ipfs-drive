import { WalletAddress } from "@thirdweb-dev/react";

import { UploadRequest, UploadResponse } from "./content.dto";

export interface ContentServiceInterface {
  /**
   * Upload a file to the content service and return the CID
   * @param request The request to upload a file
   * @param owner The owner of the file
   */
  upload(request: UploadRequest, owner: WalletAddress): Promise<UploadResponse>;
}
