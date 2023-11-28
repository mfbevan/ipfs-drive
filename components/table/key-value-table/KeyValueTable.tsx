import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export type TableValue = string | number | ReactNode;

export interface KeyValueTableProps {
  data: Record<string, TableValue>;
  labels: Record<string, TableValue>;
  caption?: string;
}

export const KeyValueTable = ({
  data,
  labels,
  caption,
}: KeyValueTableProps) => (
  <TableContainer>
    <Table variant="simple" size="sm" rounded="md" bg="itemBg">
      {caption && <TableCaption>{caption}</TableCaption>}
      <Tbody>
        {Object.entries(data).map(([key, value]) => (
          <Tr key={key}>
            <Td fontWeight="bold">{labels[key]}</Td>
            <Td>{value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
