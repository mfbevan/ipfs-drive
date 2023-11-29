import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { DriveListItem, DriveListItemSkeleton } from "./DriveListItem";

import { BaseContainer } from "@/components/theme/variants";
import { DriveFile } from "@/lib";

export interface DriveListProps {
  files: DriveFile[];
  isLoading?: boolean;
}

export const DriveList = ({ files, isLoading }: DriveListProps) => (
  <BaseContainer>
    <TableContainer w="full">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Preview</Th>
            <Th>File Name</Th>
            <Th>Content Type</Th>
            <Th>Created At</Th>
            <Th>Visibility</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading ? (
            <DriveListItemSkeleton />
          ) : (
            files.map((file, index) => (
              <DriveListItem key={index.toFixed()} file={file} />
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  </BaseContainer>
);
