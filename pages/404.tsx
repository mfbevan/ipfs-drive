import type { NextPage } from "next";

import { AppLayout, PageError404 } from "@/components";

const NotFound: NextPage = () => (
  <AppLayout title="Nexeth">
    <PageError404 />
  </AppLayout>
);

export default NotFound;
