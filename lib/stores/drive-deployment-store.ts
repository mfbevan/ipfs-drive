import { create } from "zustand";

export interface DriveDeploymentStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isLoading: boolean;
}

export const useDriveDeploymentStore = create<DriveDeploymentStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  isLoading: false,
}));
