import { Client } from "@xmtp/react-sdk";
import { createContext } from "react";

export interface XmptClientContextValues {
  client?: Client;
  publicKey?: string;
}

export const XmptClientContext = createContext<XmptClientContextValues>({
  client: undefined,
  publicKey: undefined,
});
