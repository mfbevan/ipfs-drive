import { NextPage } from "next";

import { AppLayout, useQueryParams } from "@/components";

const Home: NextPage = () => {
  const { address } = useQueryParams(["address"]);

  return (
    <AppLayout title="Messages" breadcrumbs>
      {address}
    </AppLayout>
  );
};

export default Home;
