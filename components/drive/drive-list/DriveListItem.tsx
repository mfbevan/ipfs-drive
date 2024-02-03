import { Tr, Td, chakra, Skeleton } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

import { DriveFile, toDateTimeString, useDriveStore } from "@/lib";

export interface DriveListItemProps {
  file: DriveFile;
}

export const DriveListItem = ({
  file: {
    content,
    metadata: { name, contentType, createdAt, encrypted },
  },
  file,
}: DriveListItemProps) => {
  const { setSelectedFile } = useDriveStore();
  const onClick = () => setSelectedFile(file);

  return (
    <StyledTr onClick={onClick}>
      <StyledTd>
        <MediaRenderer src={content} height="40px" width="40px" />
      </StyledTd>
      <StyledTd>{name}</StyledTd>
      <StyledTd>{contentType}</StyledTd>
      <StyledTd>{toDateTimeString(new Date(createdAt))}</StyledTd>
      <StyledTd>{encrypted ? "Private" : "Public"}</StyledTd>
    </StyledTr>
  );
};

export const DriveListItemSkeleton = () => (
  <StyledTr>
    {Array.from({ length: 5 }, (_, index) => (
      <StyledTd key={index.toFixed()}>
        <Skeleton h="40px" w="full" rounded="xl" />
      </StyledTd>
    ))}
  </StyledTr>
);

const StyledTr = chakra(Tr, {
  baseStyle: {
    cursor: "pointer",
    _hover: {
      bg: "itemOffsetBg",
    },
  },
});

const StyledTd = chakra(Td, {
  baseStyle: {
    padding: "0.5rem",
  },
});
