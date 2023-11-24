import { Signer } from "ethers";

/**
 * Facilitates the encryption and decryption of data for an EVM wallet address
 */
export interface EncryptionServiceInterface {
  /**
   * Encrypt data for an EVM wallet address
   * @param data The data to encrypt
   * @param nonce The nonce to use for encryption
   * @param owner A signer representing the owner of the data that can decrypt it
   */
  encrypt(
    data: Uint8Array,
    nonce: Uint8Array,
    owner: Signer
  ): Promise<Uint8Array>;

  /**
   * Decrypt data for an EVM wallet address
   * @param data The encrypted data
   * @param nonce The nonce used to encrypt the data
   * @param owner A singer representing the owner of the data that can decrypt it
   */
  decrypt(
    data: Uint8Array,
    nonce: Uint8Array,
    owner: Signer
  ): Promise<Uint8Array>;

  /**
   * Create a new nonce for encryption
   * @return A randomly generated nonce
   */
  nonce(): Uint8Array;
}
