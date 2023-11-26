import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Conversation } from "@xmtp/react-sdk";
import { toast } from "react-toastify";
import { z } from "zod";

export const sendMessageFormSchema = z.object({
  message: z.string(),
});

export type SendMessageForm = z.infer<typeof sendMessageFormSchema>;

export interface UseSendMessageProps {
  conversation: Conversation;
}

export const useSendMessage = ({ conversation }: UseSendMessageProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newConversation: SendMessageForm) => {
      try {
        const { message } = sendMessageFormSchema.parse(newConversation);
        await conversation.send(message);
        // TODO support more message parameters and content types in future
      } catch (err: any) {
        toast.error(err.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
