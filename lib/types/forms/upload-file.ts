import { z } from "zod";

const fileSchema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
  lastModified: z.number(),
});

export const uploadFileSchema = z.object({
  files: z.array(fileSchema).max(1),
  name: z.string().min(1).max(32),
  description: z.string().optional(),
  encrypted: z.boolean().optional(),
  drive: z.string(),
  chainId: z.number(),
});

export type UploadFileRequest = z.infer<typeof uploadFileSchema>;

export const uploadFileResponse = z.object({
  metadataCid: z.string(),
  tokenId: z.number(),
});

export type UploadFileResponse = z.infer<typeof uploadFileResponse>;
