import { ChainIdOrNumber, WalletAddress } from "@thirdweb-dev/react";

import { DriveFile, UploadFileRequest, UploadFileResponse } from "@/lib";

export interface ContentServiceInterface {
  /**
   * Upload a file to the content service and return the CID
   * @param request The request to upload a file
   * @param creator The creator of the file
   * @returns The CID of the metadata file
   */
  uploadFile(
    request: UploadFileRequest,
    creator: WalletAddress
  ): Promise<UploadFileResponse>;

  /**
   * Retrieve all of the files for a drive
   * @param drive The address of the drive contract
   * @param chainId The chainId of the drive contract
   */
  getFilesForDrive(
    drive: string,
    chainId: ChainIdOrNumber
  ): Promise<DriveFile[]>;
}
