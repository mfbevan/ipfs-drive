import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { FormInput } from "@/components/form";
import {
  CreateConversationForm,
  createConversationFormSchema,
  useCreateConversation,
} from "@/lib";

export const NewConversation = () => {
  const { isLoading, mutateAsync: createConversation } =
    useCreateConversation();
  const { handleSubmit, register, formState } = useForm<CreateConversationForm>(
    {
      defaultValues: { address: "" },
      resolver: zodResolver(createConversationFormSchema),
    }
  );

  const { errors } = formState;

  const onSubmit = async (data: CreateConversationForm) => {
    console.log(data);
    await createConversation(data);
    // TODO redirect to the new conversation
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
          placeholder="New Conversation"
          className="input input-bordered input-md w-full max-w-xs text-base-content"
          topLeftLabel="Create a new conversation"
          bottomLeftLabel={errors.address?.message}
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
          register={register("address")}
        />
      </div>
    </form>
  );
};
