import { useSigner } from "@thirdweb-dev/react";
import { Client, ClientOptions } from "@xmtp/react-sdk";
import { useCallback, useEffect, useMemo, useState } from "react";

import { XmptClientContext } from "./xmpt-client.context";
import { loadKeys, storeKeys } from "./xmpt.utils";

import { XMPT_ENV } from "@/lib";

const clientOptions: Partial<ClientOptions> = { env: XMPT_ENV };

export interface XmptClientProviderProps {
  children: React.ReactNode;
}

export const XmptClientProvider = ({ children }: XmptClientProviderProps) => {
  const [client, setClient] = useState<Client | undefined>(undefined);

  const signer = useSigner();

  const connect = useCallback(async (): Promise<Client | undefined> => {
    if (!signer) return undefined;
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

    return Client.create(null, {
      ...clientOptions,
      privateKeyOverride: keys,
    });
  }, [signer]);

  useEffect(() => {
    connect().then(setClient);
  }, [connect, signer]);

  const value = useMemo(() => ({ client }), [client]);

  return (
    <XmptClientContext.Provider value={value}>
      {children}
    </XmptClientContext.Provider>
  );
};
