import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import Link from "next/link";

import {
  KeyValueDisplay,
  useCurrentDrive,
  useIpfsDownload,
  useIpfsUrl,
} from "@/components";
import { shortenString, toDateTimeString, useDriveStore } from "@/lib";

export interface FileDrawerProps {}

export const FileDrawer = ({}: FileDrawerProps) => {
  const { selectedFile, setSelectedFile } = useDriveStore();
  const { currentDrive } = useCurrentDrive();
  const cid = selectedFile?.content ?? "";
  const url = useIpfsUrl(cid);
  const { onDownload, isLoading } = useIpfsDownload(cid);

  const isOpen = !!selectedFile;
  const onClose = () => setSelectedFile(undefined);

  return (
    <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent roundedLeft="xl">
        <DrawerCloseButton />
        <DrawerHeader>{selectedFile?.metadata.name}</DrawerHeader>

        <DrawerBody>
          <BodyContainer>
            <MediaRenderer src={selectedFile?.content} />
            <KeyValueDisplay
              data={{
                drive: shortenString(currentDrive),
                name: selectedFile?.metadata.name,
                cid: shortenString(cid),
                contentType: selectedFile?.metadata.contentType,
                visibility: selectedFile?.metadata.encrypted
                  ? "Public"
                  : "Private",
                createdAt: toDateTimeString(selectedFile?.metadata.createdAt),
              }}
              labels={{
                drive: "Drive",
                name: "Name",
                cid: "Content ID",
                contentType: "Content Type",
                visibility: "Visibility",
                createdAt: "Created At",
              }}
            />
            <Link href={url ?? "#"} target="_blank">
              <ActionButton
                colorScheme="accent"
                rightIcon={<ExternalLinkIcon />}
              >
                View External
              </ActionButton>
            </Link>
            <ActionButton
              colorScheme="accent"
              rightIcon={<DownloadIcon />}
              onClick={onDownload}
              isLoading={isLoading}
            >
              Download
            </ActionButton>
          </BodyContainer>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const BodyContainer = chakra(Flex, {
  baseStyle: {
    gap: "10px",
    flexDirection: "column",
  },
});

const ActionButton = chakra(Button, {
  baseStyle: {
    w: "full",
  },
});
