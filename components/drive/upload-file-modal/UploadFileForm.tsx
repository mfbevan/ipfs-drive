import { Button, Flex, ModalFooter, chakra } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient } from "@tanstack/react-query";
import { useSigner, useSwitchChain } from "@thirdweb-dev/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { FileSelect, FormError, FormInput, InfoHelper } from "@/components";
import { ContentService, supportedFileTypes, useUploadFileStore } from "@/lib";
import {
  UploadFileRequest,
  uploadFileSchema,
} from "@/lib/types/forms/upload-file";

export interface UploadFileFormProps {
  drive: string;
  chainId: number;
  queryClient: QueryClient;
}

export const UploadFileForm = ({
  drive,
  chainId,
  queryClient,
}: UploadFileFormProps) => {
  const { onClose } = useUploadFileStore();
  const signer = useSigner();
  const switchChain = useSwitchChain();

  const form = useForm<UploadFileRequest>({
    resolver: zodResolver(uploadFileSchema),
    defaultValues: { encrypted: false, drive, chainId },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: UploadFileRequest) => {
    if (!signer) return;
    const address = await signer.getAddress();

    try {
      const files = form.getValues("files") as File[];
      const contentService = new ContentService(signer, chainId);
      await switchChain(chainId);
      await contentService.uploadFile({ ...data, files }, address);

      toast.success("File Uploaded");
      queryClient.invalidateQueries();
    } catch (error: any) {
      toast.error(error.message);
    }

    onClose();
  };

  const onError = (error: any) => {
    console.log(form.getValues());
    console.log(Object.values(supportedFileTypes));
    console.log(error);
    toast.error(error.message);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onError)}>
      <Flex flexDirection="column" gap="10px">
        <FileSelect
          label="File"
          field="files"
          form={form}
          infoIcon={
            <InfoHelper label="Click to select or drag and drop the file you wish to upload" />
          }
          fileTypes={Object.values(supportedFileTypes)}
          required
        />
        <FormError form={form} field="files" />
        <FormInput
          type="text"
          placeholder="Name"
          label="Name"
          register={form.register("name")}
          infoIcon={<InfoHelper label="The name of the file" />}
          required
        />
        <FormError form={form} field="name" />
        <FormInput
          type="text"
          placeholder="Description"
          label="Description"
          register={form.register("description")}
          infoIcon={
            <InfoHelper label="(optional) A brief description of the file" />
          }
        />
        <FormError form={form} field="description" />
      </Flex>

      <StyledFooter>
        <Button
          size="sm"
          colorScheme="red"
          variant="ghost"
          onClick={onClose}
          isDisabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          size="sm"
          colorScheme="accent"
          type="submit"
          isLoading={isLoading}
        >
          Upload
        </Button>
      </StyledFooter>
    </form>
  );
};

const StyledFooter = chakra(ModalFooter, {
  baseStyle: {
    gap: "10px",
    p: "0px",
    pt: "10px",
    pb: "15px",
  },
});
