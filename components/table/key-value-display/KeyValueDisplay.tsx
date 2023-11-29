/* eslint-disable no-nested-ternary */
import { Text, Flex, chakra, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

import { BaseContainer } from "@/components/theme/variants/Containers";

export type DisplayValue = string | number | ReactNode;

export interface KeyValueDisplayProps {
  data: Record<string, DisplayValue>;
  labels: Record<string, DisplayValue>;
  keyStyle?: TextProps;
  valueStyle?: TextProps;
  defaultValue?: string;
}

export const KeyValueDisplay = ({
  data,
  labels,
  keyStyle,
  valueStyle,
  defaultValue,
}: KeyValueDisplayProps) => (
  <DisplayContainer>
    {Object.entries(data).map(([key, value]) => (
      <Flex flexDirection="column" key={key}>
        <DisplayLabelText {...keyStyle}>{labels[key]}</DisplayLabelText>
        <DisplayValueText
          {...valueStyle}
          opacity={value ? "1" : defaultValue ? "0.2" : "1"}
        >
          {value || defaultValue}
        </DisplayValueText>
      </Flex>
    ))}
  </DisplayContainer>
);

const DisplayContainer = chakra(BaseContainer, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "5px",
    py: "20px",
    px: "0px",
  },
});

const DisplayLabelText = chakra(Text, {
  baseStyle: {
    fontSize: "2xs",
    fontWeight: "bold",
    opacity: "0.8",
    px: "20px",
  },
});

const DisplayValueText = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    px: "20px",
    h: "20px",
  },
});
