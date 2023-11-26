import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import { UploadRequest, UploadResponse } from "./content.dto";
import { ContentServiceInterface } from "./content.service.interface";

import { WalletAddress, serverThirdWebSDK } from "@/lib";

export class ContentService implements ContentServiceInterface {
  private storage: ThirdwebSDK["storage"];

  constructor() {
    const sdk = serverThirdWebSDK();
    this.storage = sdk.storage;
  }

  async upload(
    { file, encrypted }: UploadRequest,
    owner: WalletAddress
  ): Promise<UploadResponse> {
    Promise.resolve({ encrypted, owner }); // TODO address this when encryption is available
    const cid = await this.storage.upload(file);

    return { cid };
  }
}
