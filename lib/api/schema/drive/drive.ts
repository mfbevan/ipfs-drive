import { z } from "zod";

export const driveSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: z.string(),
  network: z.number(),
  metadata: z.record(z.any()),
});

export type Drive = z.infer<typeof driveSchema>;

export const getDrivesForAddressRequest = z.object({
  address: z.string(),
});

export type GetDrivesForAddressRequest = z.infer<
  typeof getDrivesForAddressRequest
>;

export const getDrivesForAddressResponse = z.object({
  drives: z.array(driveSchema),
});

export type GetDrivesForAddressResponse = z.infer<
  typeof getDrivesForAddressResponse
>;
