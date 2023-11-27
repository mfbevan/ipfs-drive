import { useChainId, useSwitchChain } from "@thirdweb-dev/react";
import { toast } from "react-toastify";

import { FormSelect, InfoHelper } from "@/components";
import { DeploymentNetwork, extractReadableError } from "@/lib";

export interface ChooseNetworkProps {
  networks: DeploymentNetwork[];
}

export const ChooseNetwork = ({ networks }: ChooseNetworkProps) => {
  const options = networks.map((network) => network.name);
  const switchChain = useSwitchChain();
  const chainId = useChainId();
  const currentChain = networks.find((network) => network.chainId === chainId);

  const onSwitchChain = async (chainId: number) => {
    try {
      await switchChain(chainId);
    } catch (error: any) {
      toast.error(extractReadableError(error.message));
    }
  };

  return (
    <FormSelect
      label="Network"
      value={currentChain?.name}
      setValue={(value) =>
        onSwitchChain(
          networks.find((network) => network.name === value)?.chainId || 1
        )
      }
      options={options}
      infoIcon={<InfoHelper label="The network to deploy the collection to" />}
    />
  );
};
