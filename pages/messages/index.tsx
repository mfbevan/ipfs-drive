import { NextPage } from "next";

import { AppLayout, NewConversation } from "@/components";
import { ConversationList } from "@/components/messaging/conversation-list/ConversationList";
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
