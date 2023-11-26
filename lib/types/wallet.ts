import { isPossibleEVMAddress } from "@thirdweb-dev/react";
import { z } from "zod";

export type WalletAddress = string;

export const walletAddressSchema = z
  .string()
  .refine((val) => isPossibleEVMAddress(val), "Invalid Wallet Address");
