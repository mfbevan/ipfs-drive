import { ConnectWallet } from "@thirdweb-dev/react";
import { FaWallet } from "react-icons/fa";

import { BaseIconButton } from "../icon-buttons";

export const StatefulConnectButton = () => (
  <ConnectWallet
    style={{ height: "50px" }}
    className="text-base btn btn-primary"
    detailsBtn={() => (
      <BaseIconButton
        colorScheme="accent"
        icon={<FaWallet />}
        aria-label="connect-wallet"
        label="Wallet"
        size="xs"
        boxSize="40px"
        rounded="xl"
      />
    )}
  />
);
