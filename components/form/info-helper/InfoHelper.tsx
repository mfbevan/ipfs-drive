import { useColorModeValue, Box, chakra, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdInfo } from "react-icons/md";

export interface InfoHelperProps {
  label: string | ReactNode;
}

/**
 * A general info helper for use with forms
 */
export const InfoHelper = ({ label }: InfoHelperProps) => (
  <Tooltip rounded="md" fontSize="0.8rem" label={label}>
    <Box color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}>
      <InfoIcon size="12px" />
    </Box>
  </Tooltip>
);

const InfoIcon = chakra(MdInfo, {
  baseStyle: {
    mb: "3px",
  },
});
