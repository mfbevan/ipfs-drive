import Head from "next/head";

import { Navbar } from "../navigation";

export interface AppLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const AppLayout = ({ title, children }: AppLayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main className="bg-neutral min-h-screen flex-col items-center justify-between top-0 absolute w-full">
      <Navbar />
      {children}
    </main>
  </>
);
