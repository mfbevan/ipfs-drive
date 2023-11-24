import { ChainOrRpcUrl, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Signer } from "ethers";

import {
  THIRDWEB_AUTH_PRIVATE_KEY,
  THIRDWEB_CLIENT_ID,
  THIRDWEB_SECRET_KEY,
} from "../../constants";

const defaultNetwork: ChainOrRpcUrl = "ethereum";

export const clientThirdWebSDK = (
  signer: Signer,
  network: ChainOrRpcUrl = defaultNetwork
) =>
  ThirdwebSDK.fromSigner(signer, network, {
    clientId: THIRDWEB_CLIENT_ID,
  });

export const serverThirdWebSDK = (network: ChainOrRpcUrl = defaultNetwork) =>
  ThirdwebSDK.fromPrivateKey(THIRDWEB_AUTH_PRIVATE_KEY, network, {
    secretKey: THIRDWEB_SECRET_KEY,
  });
