import { ConnectWallet } from "@thirdweb-dev/react";
import { FaWallet } from "react-icons/fa";

export const StatefulConnectButton = () => (
  <ConnectWallet
    style={{ height: "50px" }}
    className="text-base btn btn-primary"
    detailsBtn={() => (
      <button className="btn btn-square bg-base-100">
        <FaWallet />
      </button>
    )}
  />
);
