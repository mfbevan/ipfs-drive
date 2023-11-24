import { NextPage } from "next";

import {
  AppLayout,
  MessageHistory,
  SendMessage,
  useQueryParams,
} from "@/components";
import { useConversation } from "@/lib";

const Home: NextPage = () => {
  const { address } = useQueryParams(["address"]);
  const { data: { messages, conversation } = { messages: [] } } =
    useConversation({
      address,
    });

  console.log({ messages, conversation });

  if (!conversation) return null;

  return (
    <AppLayout title="Messages" breadcrumbs>
      <MessageHistory messages={messages} />
      <SendMessage conversation={conversation} />
    </AppLayout>
  );
};

export default Home;
