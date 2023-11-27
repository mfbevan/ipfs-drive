import { NextPage } from "next";

import { AppLayout, useQueryStoreSync } from "@/components";
import { DriveNavigation } from "@/components/drive/drive-navigation/DriveNavigation";
import { useDriveStore } from "@/lib/stores/drive-store";

const DrivePage: NextPage = () => {
  const { fileDisplayMode, setFileDisplayMode } = useDriveStore();
  useQueryStoreSync("fileDisplayMode", fileDisplayMode, setFileDisplayMode);

  return (
    <AppLayout title="Drive" breadcrumbs>
      <DriveNavigation />
    </AppLayout>
  );
};

export default DrivePage;
