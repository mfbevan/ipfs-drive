import { NextPage } from "next";
import { ReactNode } from "react";

import { AppLayout, useQueryParams, useQueryStoreSync } from "@/components";
import { DriveGrid } from "@/components/drive/drive-grid";
import { DriveNavigation } from "@/components/drive/drive-navigation/DriveNavigation";
import { FileDisplayMode, useDriveStore } from "@/lib";
import { trpc } from "@/utils";

const DrivePage: NextPage = () => {
  const { address: driveAddress } = useQueryParams(["address"]);
  const { fileDisplayMode, setFileDisplayMode } = useDriveStore();
  useQueryStoreSync("fileDisplayMode", fileDisplayMode, setFileDisplayMode);

  const { data } = trpc.drive.getDriveFiles.useQuery({ driveAddress });
  const files = data?.files ?? [];

  const displayModes: Record<FileDisplayMode, ReactNode> = {
    grid: <DriveGrid files={files} />,
    list: "List",
  };

  return (
    <AppLayout title="Drive" breadcrumbs>
      <DriveNavigation />
      {displayModes[fileDisplayMode]}
    </AppLayout>
  );
};

export default DrivePage;
