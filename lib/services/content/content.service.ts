import { ChainIdOrNumber, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Signer } from "ethers";

import { ContentServiceInterface } from "./content.service.interface";

import {
  DriveFile,
  DriveFileMetadata,
  THIRDWEB_CLIENT_ID,
  WalletAddress,
  clientThirdWebSDK,
} from "@/lib";
import {
  UploadFileRequest,
  UploadFileResponse,
} from "@/lib/types/forms/upload-file";

export class ContentService implements ContentServiceInterface {
  private signer: Signer;

  private sdk: ThirdwebSDK;

  private storage: ThirdwebSDK["storage"];

  constructor(signer: Signer, network?: ChainIdOrNumber) {
    this.signer = signer;
    this.sdk = clientThirdWebSDK(this.signer, network);
    this.storage = this.sdk.storage;
  }

  async uploadFile(
    { files, name, description, encrypted, drive, chainId }: UploadFileRequest,
    owner: WalletAddress
  ): Promise<UploadFileResponse> {
    const file = files[0];

    const driveFile = {
      content: file,
      metadata: {
        name,
        description,
        contentType: file.type,
        chainId,
        drive,
        createdAt: new Date().getTime(),
        encrypted: Boolean(encrypted),
        owner,
      } satisfies DriveFileMetadata,
    };

    const metadataCid: string = await this.storage.upload(driveFile);
    const tokenId = await this.mintFile(metadataCid, drive);

    return {
      metadataCid,
      tokenId,
    };
  }

  private async mintFile(metadataCid: string, drive: string): Promise<number> {
    const contract = await this.sdk.getContract(drive);
    const { id } = await contract.erc721.mint(metadataCid);
    return id.toNumber();
  }

  public async getFilesForDrive(
    drive: string,
    chainId: ChainIdOrNumber
  ): Promise<DriveFile[]> {
    const driveSdk = new ThirdwebSDK(chainId, {
      clientId: THIRDWEB_CLIENT_ID,
    });

    const contract = await driveSdk.getContract(drive);
    const files = await contract.erc721.getAll();

    return files.map((file) => file.metadata as unknown as DriveFile);
  }
}
