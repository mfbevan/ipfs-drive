import {
  Flex,
  chakra,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export type SimpleTableValue = string | number | ReactNode;
export type SimpleTableData = Record<string, SimpleTableValue>;

export interface SimpleTableProps<T extends SimpleTableData> {
  data: T[];
  headers: string[];
}

export const SimpleTable = <T extends SimpleTableData>({
  data,
  headers,
}: SimpleTableProps<T>) => (
  <DisplayContainer>
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index.toFixed()}>
              {Object.keys(item).map((key) => (
                <Td key={key}>{item[key as keyof T]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </DisplayContainer>
);

const DisplayContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    bg: "itemBg",
    border: "1px solid",
    borderColor: "border",
    rounded: "xl",
    gap: "5px",
  },
});
