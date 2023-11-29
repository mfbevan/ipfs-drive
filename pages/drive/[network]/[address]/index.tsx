import { NextPage } from "next";
import { ReactNode } from "react";

import {
  AppLayout,
  DriveList,
  FileDrawer,
  PageError,
  useDriveFiles,
  useQueryParams,
  useQueryStoreSync,
} from "@/components";
import { DriveGrid } from "@/components/drive/drive-grid";
import { DriveNavigation } from "@/components/drive/drive-navigation/DriveNavigation";
import { FileDisplayMode, useDriveStore } from "@/lib";

const DrivePage: NextPage = () => {
  const { address: drive, network: chainId } = useQueryParams([
    "network",
    "address",
  ]);
  const { fileDisplayMode, setFileDisplayMode } = useDriveStore();
  useQueryStoreSync("fileDisplayMode", fileDisplayMode, setFileDisplayMode);

  const { data, isLoading } = useDriveFiles({
    drive,
    chainId: Number(chainId),
  });
  const files = data ?? [];
  const hasFiles = files && files.length > 0;

  const displayModes: Record<FileDisplayMode, ReactNode> = {
    grid: <DriveGrid files={files} isLoading={isLoading} />,
    list: <DriveList files={files} isLoading={isLoading} />,
  };

  return (
    <AppLayout
      title="Nexeth - Drive"
      breadcrumbs
      breadcrumbOptions={{ filterChains: true }}
    >
      <DriveNavigation />
      <FileDrawer />
      {isLoading || hasFiles ? (
        displayModes[fileDisplayMode]
      ) : (
        <PageError
          statusCode="🧐"
          title="Still Nothing Here"
          description="No files were found for this drive. Try uploading a file."
          backToHome={false}
        />
      )}
    </AppLayout>
  );
};

export default DrivePage;
