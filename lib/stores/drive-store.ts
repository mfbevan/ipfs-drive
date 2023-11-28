import { create } from "zustand";

import { DriveFile } from "..";

export type FileDisplayMode = "list" | "grid";

export interface DriveStore {
  fileDisplayMode: FileDisplayMode;
  setFileDisplayMode: (mode: FileDisplayMode) => void;
  search?: string;
  setSearch: (search: string) => void;
  selectedFile?: DriveFile;
  setSelectedFile: (file?: DriveFile) => void;
}

export const useDriveStore = create<DriveStore>((set) => ({
  fileDisplayMode: "list",
  setFileDisplayMode: (mode) => set({ fileDisplayMode: mode }),
  search: "",
  setSearch: (search) => set({ search }),
  selectedFile: undefined,
  setSelectedFile: (file) => set({ selectedFile: file }),
}));
