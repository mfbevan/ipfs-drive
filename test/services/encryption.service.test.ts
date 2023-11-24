import { describe, expect, test } from "bun:test";

import { EncryptionService } from "../../lib";
import { walletA } from "../mocks";

describe("Encryption Service", () => {
  const encryptionService = new EncryptionService();
  const data = Buffer.from("Hello World");
  const owner = walletA;

  describe("encrypt", () => {
    test("should return a Uint8Array", async () => {
      const nonce = encryptionService.nonce();
      const encrypted = await encryptionService.encrypt(data, nonce, owner);
      expect(encrypted).toBeInstanceOf(Uint8Array);
    });

    test("should return an encrypted Uint8Array", async () => {
      const nonce = encryptionService.nonce();
      const encrypted = await encryptionService.encrypt(data, nonce, owner);
      expect(encrypted).not.toEqual(data);
    });
  });

  describe("decrypt", () => {
    test("should return a Uint8Array", async () => {
      const nonce = encryptionService.nonce();
      const encrypted = await encryptionService.encrypt(data, nonce, owner);
      const decrypted = await encryptionService.decrypt(
        encrypted,
        nonce,
        owner
      );
      expect(decrypted).toBeInstanceOf(Uint8Array);
    });

    test("should return a decrypted Uint8Array", async () => {
      const nonce = encryptionService.nonce();
      const encrypted = await encryptionService.encrypt(data, nonce, owner);
      const decrypted = await encryptionService.decrypt(
        encrypted,
        nonce,
        owner
      );
      expect(decrypted).toEqual(data);
    });
  });

  describe("nonce", () => {
    test("should return a 32 byte Uint8Array", () => {
      const nonce = encryptionService.nonce();
      expect(nonce).toBeInstanceOf(Uint8Array);
    });

    test("should return a random nonce", () => {
      const nonce1 = encryptionService.nonce();
      const nonce2 = encryptionService.nonce();
      const nonce3 = encryptionService.nonce();

      expect(nonce1).not.toEqual(nonce2);
      expect(nonce1).not.toEqual(nonce3);
      expect(nonce2).not.toEqual(nonce3);
    });

    test("it should return an empty nonce", () => {
      const nonce = encryptionService.emptyNonce;
      expect(nonce).toBeInstanceOf(Uint8Array);
    });
  });
});
