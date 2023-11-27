import { create } from "zustand";

export type FileDisplayMode = "list" | "grid";

export interface DriveStore {
  fileDisplayMode: FileDisplayMode;
  setFileDisplayMode: (mode: FileDisplayMode) => void;
  search?: string;
  setSearch: (search: string) => void;
}

export const useDriveStore = create<DriveStore>((set) => ({
  fileDisplayMode: "list",
  setFileDisplayMode: (mode) => set({ fileDisplayMode: mode }),
  search: "",
  setSearch: (search) => set({ search }),
}));
