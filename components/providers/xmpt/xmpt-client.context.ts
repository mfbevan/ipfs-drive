import { Client } from "@xmtp/react-sdk";
import { createContext } from "react";

export interface XmptClientContextValues {
  client?: Client;
  publicKey?: string;
  connect: () => Promise<Client | undefined>;
  isModalOpen: boolean;
}

export const XmptClientContext = createContext<XmptClientContextValues>({
  client: undefined,
  publicKey: undefined,
  connect: async () => undefined,
  isModalOpen: false,
});
