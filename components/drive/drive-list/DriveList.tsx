import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";

import { DriveListItem } from "./DriveListItem";

import { DriveFile } from "@/lib";

export interface DriveListProps {
  files: DriveFile[];
}

export const DriveList = ({ files }: DriveListProps) => (
  <ListContainer>
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
          {files.map((file, index) => (
            <DriveListItem key={index.toFixed()} file={file} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </ListContainer>
);

const ListContainer = chakra(Flex, {
  baseStyle: {
    boxShadow: "base",
    w: "full",
    border: "1px solid",
    borderColor: "border",
    rounded: "xl",
    py: "10px",
    bg: "itemBg",
  },
});
