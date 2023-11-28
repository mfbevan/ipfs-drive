import { NextPage } from "next";

import { AppLayout, NewConversation, ConversationList } from "@/components";
import { useConversations } from "@/lib";

const MessagesPage: NextPage = () => {
  const { data: conversations, isLoading } = useConversations();

  return (
    <AppLayout title="Nexeth - Messages" breadcrumbs>
      <NewConversation />
      <ConversationList conversations={conversations} isLoading={isLoading} />
    </AppLayout>
  );
};

export default MessagesPage;
