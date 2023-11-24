import { Client } from "@xmtp/react-sdk";
import { Signer } from "ethers";

import { XmptServiceInterface } from "./xmpt.service.interface";

import { XMPT_ENV } from "@/lib";

export class XmptService implements XmptServiceInterface {
  private client?: Client;

  async connect(signer?: Signer): Promise<void> {
    if (!signer) throw Error("Signer is required");
    this.client = await Client.create(signer, { env: XMPT_ENV });
  }
}
