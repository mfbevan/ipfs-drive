import { useChainId, useSwitchChain } from "@thirdweb-dev/react";
import { toast } from "react-toastify";

import { NetworkIcon } from "@/components";
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
    <div>
      <label className="label pt-0 pb-1">
        <span className="label-text text-xs ">Network</span>
      </label>
      <div className="dropdown dropdown-hover rounded-lg shadow p-2">
        <div role="button" className="m-1 flex-row">
          {currentChain?.name || "Invalid Network"}
        </div>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {options.map((option) => {
            const { chainId: optionChainId } =
              networks.find((_network) => _network.name === option) || {};

            if (!optionChainId) return null;

            return (
              <li key={option}>
                <a onClick={async () => onSwitchChain(optionChainId)}>
                  <div className="flex content-center space-x-2">
                    <div className="flex">{option}</div>
                    <div className="flex">
                      <NetworkIcon network={optionChainId} />
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
