import { z } from "zod";

import { fileSchema } from "@/lib";

export const uploadRequestSchema = z.object({
  file: fileSchema,
  encrypted: z.boolean(),
});

export type UploadRequest = z.infer<typeof uploadRequestSchema>;

export const uploadResponseSchema = z.object({
  cid: z.string(),
});

export type UploadResponse = z.infer<typeof uploadResponseSchema>;
