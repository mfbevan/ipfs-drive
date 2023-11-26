import { zodResolver } from "@hookform/resolvers/zod";
import { useSigner } from "@thirdweb-dev/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  ChooseNetwork,
  DeployDriveFormValues,
  FormInput,
  deployDriveSchema,
  useSpinner,
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

  const { errors } = form.formState;

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
      <div className="flex flex-row space-x-2">
        <div className="mb-4">
          <ChooseNetwork networks={environmentDeploymentNetworks} />
        </div>
        <FormInput
          type="text"
          placeholder="Name"
          className="input input-bordered w-full  text-base-content"
          topLeftLabel="Name"
          bottomLeftLabel={errors.name?.message}
          register={form.register("name")}
        />
      </div>
      <FormInput
        type="text"
        placeholder="Description"
        className="input input-bordered w-full  text-base-content"
        topLeftLabel="Description"
        bottomLeftLabel={errors.description?.message}
        register={form.register("description")}
      />
      <div className="modal-action">
        <button type="submit" className="btn btn-primary">
          {useSpinner(form.formState.isSubmitting, "Deploy")}
        </button>
      </div>
    </form>
  );
};
