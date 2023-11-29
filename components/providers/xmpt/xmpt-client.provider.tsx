import { useSigner } from "@thirdweb-dev/react";
import { Client, ClientOptions } from "@xmtp/react-sdk";
import { useCallback, useMemo, useState } from "react";

import {
  XmptClientContext,
  XmptClientContextValues,
} from "./xmpt-client.context";
import { loadKeys, storeKeys } from "./xmpt.utils";

import { useSessionUser } from "@/components";
import { XmptKeyModal } from "@/components/wallet/XmptKeyModal";
import { XMPT_ENV } from "@/lib";

const clientOptions: Partial<ClientOptions> = { env: XMPT_ENV };

export interface XmptClientProviderProps {
  children: React.ReactNode;
}

export const XmptClientProvider = ({ children }: XmptClientProviderProps) => {
  const [client, setClient] = useState<Client | undefined>(undefined);

  const signer = useSigner();
  const { isConnected } = useSessionUser();

  const connect = useCallback(async (): Promise<Client | undefined> => {
    if (!signer || !isConnected) return undefined;
    const address = await signer.getAddress();
    let keys = loadKeys(address);

    if (!keys) {
      keys = await Client.getKeys(signer, {
        ...clientOptions,
        skipContactPublishing: true, // we don't need to publish the contact here since it will happen when we create the client later
        persistConversations: false, // this isntance is short lived so we don't need to persist the conversations
      });
      storeKeys(address, keys);
    }

    const client = await Client.create(null, {
      ...clientOptions,
      privateKeyOverride: keys,
    });
    setClient(client);
    return client;
  }, [signer, isConnected]);

  const value: XmptClientContextValues = useMemo(
    () =>
      ({
        client,
        publicKey: client?.address,
        connect,
        isModalOpen: isConnected && !client,
      } satisfies XmptClientContextValues),
    [client, connect, isConnected]
  );

  return (
    <XmptClientContext.Provider value={value}>
      <XmptKeyModal isOpen={value.isModalOpen} connect={connect} />
      {children}
    </XmptClientContext.Provider>
  );
};
