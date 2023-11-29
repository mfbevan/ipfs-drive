import { z } from "zod";

export const fileSchema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
  lastModified: z.number(),
});

export type IFileSchema = z.infer<typeof fileSchema>;

export const supportedFileTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "video/mp4",
  "audio/mp3",
  "audio/mpeg",
  "audio/ogg",
  "audio/wav",
  "audio/webm",
  "application/pdf",
  "application/zip",
  "application/json",
] as const;

export type FileType = (typeof supportedFileTypes)[number];
