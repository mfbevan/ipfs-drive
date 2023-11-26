import { ConnectWallet } from "@thirdweb-dev/react";
import { FaWallet } from "react-icons/fa";

export const StatefulConnectButton = () => (
  <ConnectWallet
    style={{ height: "50px" }}
    className="text-base btn btn-primary"
    detailsBtn={() => (
      <div className="tooltip tooltip-bottom" data-tip="Wallet">
        <button className="btn btn-square bg-base-100">
          <FaWallet />
        </button>
      </div>
    )}
  />
);
