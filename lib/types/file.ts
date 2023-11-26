import { z } from "zod";

export const fileSchema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
});

export type FileSchema = z.infer<typeof fileSchema>;
