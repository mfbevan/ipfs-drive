import { zodResolver } from "@hookform/resolvers/zod";
import { Conversation } from "@xmtp/react-sdk";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { FormInput } from "@/components";
import { SendMessageForm, sendMessageFormSchema, useSendMessage } from "@/lib";

export interface SendMessageProps {
  conversation: Conversation;
}

export const SendMessage = ({ conversation }: SendMessageProps) => {
  const { mutateAsync: sendMessage, isLoading } = useSendMessage({
    conversation,
  });

  const { handleSubmit, register, formState } = useForm<SendMessageForm>({
    defaultValues: { message: "" },
    resolver: zodResolver(sendMessageFormSchema),
  });

  const onSubmit = async (data: SendMessageForm) => {
    await sendMessage(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
    toast.error(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex gap-x-4">
        <FormInput
          type="text"
          placeholder="Enter message ..."
          className="input input-bordered input-md w-full max-w-xs text-base-content"
          topLeftLabel="Send a message"
          actionButton={
            <button
              type="submit"
              className="btn btn-square flex-0"
              disabled={formState.isSubmitting}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <IoIosSend />
              )}
            </button>
          }
          register={register("message")}
        />
      </div>
    </form>
  );
};
