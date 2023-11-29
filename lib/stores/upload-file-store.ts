import { create } from "zustand";

export interface UploadFileStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const useUploadFileStore = create<UploadFileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
