import { Button, Flex, ModalFooter, chakra } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSigner } from "@thirdweb-dev/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  ChooseNetwork,
  DeployDriveFormValues,
  FormError,
  FormInput,
  InfoHelper,
  deployDriveSchema,
} from "@/components";
import {
  DeploymentService,
  environmentDeploymentNetworks,
  useDriveDeploymentStore,
} from "@/lib";

export const DeployDriveForm = () => {
  const { onClose } = useDriveDeploymentStore();
  const signer = useSigner();
  const form = useForm<DeployDriveFormValues>({
    resolver: zodResolver(deployDriveSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: DeployDriveFormValues) => {
    console.log(data);
    if (!signer) return;

    try {
      const network = await signer.provider?.getNetwork();
      const chainId = network?.chainId;
      if (!chainId) throw new Error("No chainId found");

      const deploymentService = new DeploymentService(signer, chainId);
      await deploymentService.deployDriveContract(data);

      toast.success("New Drive Created");
    } catch (error: any) {
      toast.error(error.message);
    }

    onClose();
  };

  const onError = (error: any) => {
    console.log(error);
    toast.error(error.message);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onError)}>
      <Flex flexDirection="column" gap="10px">
        <Flex flexDirection="row" gap="10px">
          <Flex flexDirection="column">
            <ChooseNetwork networks={environmentDeploymentNetworks} />
            <FormError form={form} field="name" />
          </Flex>
          <Flex flexDirection="column">
            <FormInput
              type="text"
              placeholder="Name"
              label="Name"
              register={form.register("name")}
              infoIcon={
                <InfoHelper label="The name of the drive to show in the explorer" />
              }
              required
            />
            <FormError form={form} field="name" />
          </Flex>
        </Flex>
        <FormInput
          type="text"
          placeholder="Description"
          label="Description"
          register={form.register("description")}
          infoIcon={
            <InfoHelper label="(optional) A brief description of what this drive is for" />
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
          Deploy
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
