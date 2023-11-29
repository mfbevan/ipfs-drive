import { z } from "zod";

export const deployDriveSchema = z.object({
  name: z.string().min(1).max(32),
  description: z.string().optional(),
});

export type DeployDriveFormValues = z.infer<typeof deployDriveSchema>;
