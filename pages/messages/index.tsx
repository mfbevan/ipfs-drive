import { NextPage } from "next";

import { AppLayout } from "@/components";
import { ConversationList } from "@/components/messaging/conversation-list/ConversationList";
import { useConversations } from "@/lib/query";

const Home: NextPage = () => {
  const { data: conversations, isLoading } = useConversations();

  return (
    <AppLayout title="Messages" breadcrumbs>
      <ConversationList conversations={conversations} isLoading={isLoading} />
    </AppLayout>
  );
};

export default Home;
