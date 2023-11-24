import { NextPage } from "next";

import { AppLayout } from "@/components";

const Home: NextPage = () => (
  <AppLayout title="Home">
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  </AppLayout>
);

export default Home;
