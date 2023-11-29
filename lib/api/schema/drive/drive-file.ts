import { z } from "zod";

export const driveFileMetadata = z.object({
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.number(),
  contentType: z.string(),
  encrypted: z.boolean().optional(),
  creator: z.string(),
  drive: z.string(),
  chainId: z.number(),
});

export type DriveFileMetadata = z.infer<typeof driveFileMetadata>;

export const driveFileSchema = z.object({
  content: z.string(),
  metadata: driveFileMetadata,
  uri: z.string().optional(), // This is automatically returned by the API
});

export type DriveFile = z.infer<typeof driveFileSchema>;

export const getDriveFilesRequest = z.object({
  driveAddress: z.string(),
});

export type GetDriveFilesRequest = z.infer<typeof getDriveFilesRequest>;

export const getDriveFilesResponse = z.object({
  files: z.array(driveFileSchema),
});

export type GetDriveFilesResponse = z.infer<typeof getDriveFilesResponse>;
