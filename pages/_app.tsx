import "react-toastify/dist/ReactToastify.css";
import "@/components/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { XMTPProvider } from "@xmtp/react-sdk";
import { AppProps } from "next/app";
import PageLoader from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

import {
  FeatureProvider,
  XmptClientProvider,
  theme,
  useProviderConfig as config,
  ConnectModal,
} from "@/components";
import { trpc } from "@/utils/trpc";

const providerConfig = config();

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <FeatureProvider>
      <ThirdwebProvider {...providerConfig}>
        <XMTPProvider>
          <XmptClientProvider>
            <ConnectModal />
            <ToastContainer theme="colored" position="bottom-right" />
            <PageLoader />
            <Component {...pageProps} />
          </XmptClientProvider>
        </XMTPProvider>
      </ThirdwebProvider>
    </FeatureProvider>
  </ChakraProvider>
);

export default trpc.withTRPC(App);
