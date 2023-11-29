import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  LightMode,
  chakra,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import Link from "next/link";

import {
  CopyItem,
  KeyValueDisplay,
  useCurrentDrive,
  useIpfsDownload,
} from "@/components";
import { shortenString, toDateTimeString, useDriveStore } from "@/lib";

export interface FileDrawerProps {}

export const FileDrawer = ({}: FileDrawerProps) => {
  const { selectedFile, setSelectedFile } = useDriveStore();
  const { currentDrive } = useCurrentDrive();
  const url = selectedFile?.content ?? "";
  const cid = url.split("ipfs/")[1];
  const ipfsUrl = `ipfs://${cid}`;
  const { onDownload, isLoading } = useIpfsDownload(url);

  const isOpen = !!selectedFile;
  const onClose = () => setSelectedFile(undefined);

  return (
    <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent roundedLeft="xl" bg="pageBg">
        <DrawerBody>
          <DrawerCloseButton />
          <BodyContainer>
            <MediaRenderer src={selectedFile?.content} />
            <KeyValueDisplay
              data={{
                name: selectedFile?.metadata.name,
                drive: (
                  <CopyItem item={currentDrive} withIcon>
                    {shortenString(currentDrive, 12, 11)}
                  </CopyItem>
                ),
                cid: (
                  <CopyItem item={ipfsUrl} withIcon>
                    {`ipfs://${shortenString(cid, 10, 10)}`}
                  </CopyItem>
                ),
                metadata: (
                  <CopyItem item={selectedFile?.uri ?? ""} withIcon>
                    {shortenString(selectedFile?.uri, 14, 10)}
                  </CopyItem>
                ),
                contentType: selectedFile?.metadata.contentType,
                encrypted: selectedFile?.metadata.encrypted
                  ? "Encrypted"
                  : "Public",
                createdAt: toDateTimeString(
                  new Date(selectedFile?.metadata.createdAt ?? "")
                ),
              }}
              labels={{
                drive: "Drive",
                name: "Name",
                cid: "Content Identifier (CID)",
                metadata: "Metadata (CID)",
                contentType: "Content Type",
                encrypted: "Visibility",
                createdAt: "Created At",
              }}
            />

            <LightMode>
              <Link href={ipfsUrl ?? "#"} target="_blank">
                <ActionButton
                  colorScheme="accent"
                  rightIcon={<ExternalLinkIcon />}
                >
                  View External (IPFS)
                </ActionButton>
              </Link>
              <Link href={url ?? "#"} target="_blank">
                <ActionButton
                  colorScheme="accent"
                  rightIcon={<ExternalLinkIcon />}
                >
                  View External (CDN)
                </ActionButton>
              </Link>
              <Link href={selectedFile?.uri ?? "#"} target="_blank">
                <ActionButton
                  colorScheme="accent"
                  rightIcon={<ExternalLinkIcon />}
                >
                  View Metadata (IPFS)
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
            </LightMode>
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
