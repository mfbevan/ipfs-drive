import type { NextPage } from "next";

import { AppLayout, PageError500 } from "@/components";

const Error: NextPage = () => (
  <AppLayout title="Nexeth">
    <PageError500 />
  </AppLayout>
);

export default Error;
