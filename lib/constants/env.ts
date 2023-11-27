import { XmtpEnv } from "@xmtp/react-sdk";

export const VERCEL_URL = process.env.VERCEL_URL as string;
export const THIRDWEB_CLIENT_ID = process.env
  .NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string;
export const WALLET_CONNECT_PROJECT_ID = process.env
  .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;
export const MAGIC_API_KEY = process.env.NEXT_PUBLIC_MAGIC_API_KEY as string;
export const THIRDWEB_AUTH_PRIVATE_KEY = process.env
  .THIRDWEB_AUTH_PRIVATE_KEY as string;
export const THIRDWEB_SECRET_KEY = process.env.THIRDWEB_SECRET_KEY as string;
export const XMPT_ENV = (process.env.NEXT_PUBLIC_XMPT_ENV || "dev") as XmtpEnv;
export const ENABLE_TESTNETS =
  process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";
