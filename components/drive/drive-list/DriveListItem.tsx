import { Tr, Td, chakra } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

import { DriveFile, toDateTimeString } from "@/lib";

export interface DriveListItemProps {
  file: DriveFile;
}

export const DriveListItem = ({
  file: {
    content,
    metadata: { name, contentType, createdAt, isPublic },
  },
}: DriveListItemProps) => (
  <Tr>
    <StyledTd>
      <MediaRenderer src={content} height="40px" width="40px" />
    </StyledTd>
    <StyledTd>{name}</StyledTd>
    <StyledTd>{contentType}</StyledTd>
    <StyledTd>{toDateTimeString(createdAt)}</StyledTd>
    <StyledTd>{isPublic ? "Public" : "Private"}</StyledTd>
  </Tr>
);

const StyledTd = chakra(Td, {
  baseStyle: {
    padding: "0.5rem",
  },
});
