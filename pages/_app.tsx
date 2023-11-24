import "react-toastify/dist/ReactToastify.css";
import "@/components/styles/globals.css";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AppProps } from "next/app";
import PageLoader from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { FeatureProvider, Navbar, useProviderConfig } from "@/components";

import { trpc } from "@/utils/trpc";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <FeatureProvider>
      <ThirdwebProvider {...useProviderConfig()}>
        <ToastContainer theme="colored" position="bottom-right" />
        <PageLoader />
        <Navbar />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </FeatureProvider>
  );
};

export default trpc.withTRPC(App);
