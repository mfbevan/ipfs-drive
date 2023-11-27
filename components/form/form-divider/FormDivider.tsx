import { Flex, Divider, chakra, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface FormDividerProps {
  children: ReactNode;
}

export const FormDivider = ({ children }: FormDividerProps) => (
  <Flex alignItems="center" justifyContent="space-evenly">
    <Divider />
    <DisplayLabelText>{children}</DisplayLabelText>
    <Divider />
  </Flex>
);

const DisplayLabelText = chakra(Text, {
  baseStyle: {
    fontSize: "2xs",
    fontWeight: "bold",
    opacity: "0.8",
    mx: "10px",
    w: "fit-content",
  },
});
