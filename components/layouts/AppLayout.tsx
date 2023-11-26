import Head from "next/head";

import { Navbar, PageBreadcrumbs } from "../navigation";

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
    <main className="bg-base-100 flex-col items-center justify-between top-0 absolute w-full">
      <Navbar />
      {breadcrumbs && <PageBreadcrumbs />}
      {children}
    </main>
  </>
);
