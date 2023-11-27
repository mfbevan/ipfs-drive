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
  useProviderConfig,
} from "@/components";
import { trpc } from "@/utils/trpc";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <FeatureProvider>
    <ThirdwebProvider {...useProviderConfig()}>
      <XMTPProvider>
        <XmptClientProvider>
          <ChakraProvider theme={theme}>
            <ToastContainer theme="colored" position="bottom-right" />
            <PageLoader />
            <Component {...pageProps} />
          </ChakraProvider>
        </XmptClientProvider>
      </XMTPProvider>
    </ThirdwebProvider>
  </FeatureProvider>
);

export default trpc.withTRPC(App);
