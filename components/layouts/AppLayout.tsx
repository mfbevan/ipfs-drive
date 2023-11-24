import Head from "next/head";

import { Navbar } from "../navigation";

export interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const AppLayout = ({ title, children }: AppLayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <div className="flex-col align-middle pt-60px">{children}</div>
  </>
);
