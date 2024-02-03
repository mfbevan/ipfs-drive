import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { AppLayout } from "@/components";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/drive");
  }, [router]);

  return <AppLayout title="Nexeth - Drive"></AppLayout>;
};

export default Home;
