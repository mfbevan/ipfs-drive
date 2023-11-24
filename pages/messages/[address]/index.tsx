import { NextPage } from "next";

import { AppLayout, MessageHistory, useQueryParams } from "@/components";
import { useConversation } from "@/lib";

const Home: NextPage = () => {
  const { address } = useQueryParams(["address"]);
  const { data: { messages } = { messages: [] } } = useConversation({
    address,
  });

  console.log({ messages });

  return (
    <AppLayout title="Messages" breadcrumbs>
      <MessageHistory messages={messages} />
    </AppLayout>
  );
};

export default Home;
