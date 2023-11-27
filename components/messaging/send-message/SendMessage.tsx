import { Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Conversation } from "@xmtp/react-sdk";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { BaseIconButton, FormError, FormInput } from "@/components";
import { SendMessageForm, sendMessageFormSchema, useSendMessage } from "@/lib";

export interface SendMessageProps {
  conversation: Conversation;
}

export const SendMessage = ({ conversation }: SendMessageProps) => {
  const { mutateAsync: sendMessage, isLoading } = useSendMessage({
    conversation,
  });

  const form = useForm<SendMessageForm>({
    defaultValues: { message: "" },
    resolver: zodResolver(sendMessageFormSchema),
  });
  const { register, handleSubmit } = form;

  const onSubmit = async (data: SendMessageForm) => {
    await sendMessage(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
    toast.error(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Flex gap="10px">
        <FormInput
          type="text"
          placeholder="Enter message ..."
          register={register("message")}
        />
        <BaseIconButton
          type="submit"
          isLoading={isLoading}
          icon={<IoIosSend />}
          aria-label="send-message"
          variant="standard"
        />
      </Flex>
      <FormError form={form} field="address" />
    </form>
  );
};
