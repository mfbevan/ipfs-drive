import { NextPage } from "next";

import { AppLayout } from "@/components";
import { DeployDriveModal } from "@/components/deployment";

const DrivePage: NextPage = () => (
  <AppLayout title="Drive" breadcrumbs>
    <DeployDriveModal />
  </AppLayout>
);

export default DrivePage;
