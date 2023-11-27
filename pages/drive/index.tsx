import { NextPage } from "next";

import { AppLayout, PageError } from "@/components";
import { DriveNavigation } from "@/components/drive/drive-navigation/DriveNavigation";

const DrivesPage: NextPage = () => (
  <AppLayout title="Drive" breadcrumbs>
    <DriveNavigation />
    <PageError
      statusCode="🧐"
      title="Nothing Here"
      description="There's nothing here yet. Select a drive or create a new one to get started."
      backToHome={false}
    />
  </AppLayout>
);

export default DrivesPage;
