import { isAddress } from "ethers/lib/utils";
import { z } from "zod";

export type WalletAddress = string;

export const walletAddressSchema = z
  .string()
  .refine((val) => isAddress(val), "Invalid Wallet Address");
