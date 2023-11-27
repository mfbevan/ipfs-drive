import { NextPage } from "next";

import { AppLayout } from "@/components";
import { DriveNavigation } from "@/components/drive/drive-navigation/DriveNavigation";

const DrivesPage: NextPage = () => (
  <AppLayout title="Drive" breadcrumbs>
    <DriveNavigation />
  </AppLayout>
);

export default DrivesPage;
