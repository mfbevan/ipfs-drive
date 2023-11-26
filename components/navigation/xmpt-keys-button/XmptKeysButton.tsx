import { useContext } from "react";
import { FaKey } from "react-icons/fa";

import { XmptClientContext } from "@/components";
import { XMPT_ENV, shortenString } from "@/lib";

export const XmptKeysButton = () => {
  const { client } = useContext(XmptClientContext);
  const environment = XMPT_ENV;
  const key = client?.address || "";

  return (
    <div className="tooltip tooltip-bottom" data-tip="XMPT Keys">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-square bg-base-100">
          <FaKey />
        </label>
        <div className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-base-300 text-base-content">
          <div className="card-body">
            <h4 className="card-title">XMPT Keys</h4>
            <div className="flex flex-row gap-2">
              <div className="opacity-50 bold w-25">Environment</div>
              <div className="">{environment}</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="opacity-50 w-25">Public Key</div>
              <div className="">{shortenString(key)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
