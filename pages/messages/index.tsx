import { NextPage } from "next";

import { AppLayout, NewConversation, ConversationList } from "@/components";
import { useConversations } from "@/lib";

const Home: NextPage = () => {
  const { data: conversations, isLoading } = useConversations();

  return (
    <AppLayout title="Messages" breadcrumbs>
      <NewConversation />
      <ConversationList conversations={conversations} isLoading={isLoading} />
    </AppLayout>
  );
};

export default Home;
