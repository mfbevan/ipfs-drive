import { useEffect } from "react";

import { DeployDriveForm } from "./DeployDriveForm";

import { Modal, useConditional } from "@/components";
import { useDriveDeploymentStore } from "@/lib";

export const DEPLOY_DRIVE_MODAL_ID = "deploy_drive_modal";

export interface DeployDriveModalProps {}

export const DeployDriveModal = ({}: DeployDriveModalProps) => {
  const { isOpen, onClose, onOpen } = useDriveDeploymentStore();

  const onOpenModal = () => {
    const modal = document.getElementById(DEPLOY_DRIVE_MODAL_ID) as Modal;
    modal?.showModal();
  };

  useEffect(() => {
    if (isOpen) onOpenModal();
  }, [isOpen]);

  return (
    <>
      <button className="btn" onClick={onOpen}>
        New Drive
      </button>
      {useConditional(
        isOpen,
        <dialog
          onClose={onClose}
          id={DEPLOY_DRIVE_MODAL_ID}
          className="modal text-base-content"
        >
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">New Drive</h3>
            <p className="py-4">Deploy a new drive smart contract</p>
            <DeployDriveForm />
          </div>
        </dialog>
      )}
    </>
  );
};
