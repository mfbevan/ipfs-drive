import { Signer } from "ethers";
import tweetnacl from "tweetnacl";

import { EncryptionServiceInterface } from "./encryption.service.interfaces";

export class EncryptionService implements EncryptionServiceInterface {
  async encrypt(
    data: Uint8Array,
    nonce: Uint8Array,
    owner: Signer
  ): Promise<Uint8Array> {
    Promise.resolve({ data, nonce, owner }); // TODO address this when encryption is available
    return Buffer.from(data);
  }

  async decrypt(
    data: Uint8Array,
    nonce: Uint8Array,
    owner: Signer
  ): Promise<Uint8Array> {
    Promise.resolve({ data, nonce, owner }); // TODO address this when encryption is available
    return Buffer.from("not-decrypted-data");
  }

  nonce(): Uint8Array {
    return tweetnacl.randomBytes(tweetnacl.box.nonceLength);
  }

  /**
   * An empty nonce that can be used to ensure that the same encrypted data is returned each time
   */
  public get emptyNonce(): Uint8Array {
    return new Uint8Array(tweetnacl.box.length);
  }
}
