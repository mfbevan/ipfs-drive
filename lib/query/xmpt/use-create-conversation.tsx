import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

import { XmptClientContext } from "@/components";
import { walletAddressSchema } from "@/lib";
import { EnsService } from "@/lib";

export const createConversationFormSchema = z.object({
  address: walletAddressSchema,
});

export type CreateConversationForm = z.infer<
  typeof createConversationFormSchema
>;

export const useCreateConversation = () => {
  const { client } = useContext(XmptClientContext);

  return useMutation({
    mutationFn: async (newConversation: CreateConversationForm) => {
      try {
        if (!client) throw Error("XMPT Client Not Found");
        const { address } = createConversationFormSchema.parse(newConversation);
        await client.conversations.newConversation(
          await EnsService.resolveEnsName(address)
        );
      } catch (err: any) {
        toast.error(err.message);
      }
    },
  });
};
