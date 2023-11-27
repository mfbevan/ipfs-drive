import { Flex, chakra } from "@chakra-ui/react";
import Head from "next/head";

import { AppNavigation, PageBreadcrumbs } from "../navigation";

import { navigationItems } from "@/lib";

export interface AppLayoutProps {
  title: string;
  breadcrumbs?: boolean;
  children?: React.ReactNode;
}

export const AppLayout = ({ title, children, breadcrumbs }: AppLayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <AppNavigation navigationItems={navigationItems} />
    <AppContainer>
      {breadcrumbs && <PageBreadcrumbs />}
      {children}
    </AppContainer>
  </>
);

const AppContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    overflow: "hidden",
    pt: "80px",
    maxW: "6xl",
    mx: "auto",
    px: "20px",
    gap: "20px",
    pb: "80px",
  },
});
