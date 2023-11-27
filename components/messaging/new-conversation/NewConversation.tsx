import { Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { BaseIconButton } from "@/components";
import { FormError, FormInput } from "@/components/form";
import {
  CreateConversationForm,
  createConversationFormSchema,
  useCreateConversation,
} from "@/lib";

export const NewConversation = () => {
  const { isLoading, mutateAsync: createConversation } =
    useCreateConversation();
  const form = useForm<CreateConversationForm>({
    defaultValues: { address: "" },
    resolver: zodResolver(createConversationFormSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: CreateConversationForm) => {
    console.log(data);
    await createConversation(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
    toast.error(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Flex flexDirection="column">
        <Flex gap="10px" alignItems="flex-end">
          <FormInput
            type="text"
            placeholder="🔎 Enter a user address or ENS name"
            label="Create a new conversation"
            bottomLeftLabel={errors.address?.message}
            register={register("address")}
          />

          <BaseIconButton
            type="submit"
            isLoading={isLoading}
            icon={<IoIosSend />}
            aria-label="new-conversation"
            label="New Converstion"
            variant="standard"
          />
        </Flex>
        <FormError form={form} field="address" />
      </Flex>
    </form>
  );
};
