import { chakra, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdWarning } from "react-icons/io";

export interface VersionStatusProps {
  header: string;
  text: string;
  url: string;
}

export const VersionStatus = ({ header, text, url }: VersionStatusProps) => (
  <Link href={url}>
    <Container role="group">
      <WarningIcon size="16px" />
      <TextContainer spacing="0px">
        <DisclaimerHeader>{header}</DisclaimerHeader>
        <DisclaimerText>{text}</DisclaimerText>
      </TextContainer>
    </Container>
  </Link>
);

const Container = chakra(HStack, {
  baseStyle: {
    transition: "all 0.2s ease",
    boxShadow: "base",
    rounded: "xl",
    h: "40px",
    w: "40px",
    _hover: {
      w: "200px",
    },
    overflow: "none",
    cursor: "pointer",
    bg: "accent.300",
  },
});

const WarningIcon = chakra(IoMdWarning, {
  baseStyle: {
    boxSize: "16px",
    ml: "12px",
  },
});

const TextContainer = chakra(VStack, {
  baseStyle: {
    py: "6px",
  },
});

const DisclaimerHeader = chakra(Text, {
  baseStyle: {
    noOfLines: 1,
    fontSize: "0.7rem",
    fontWeight: 800,
    h: "16px",
    w: "0px",
    transition: "all 0.2s ease",
    _groupHover: {
      w: "160px",
    },
  },
});

const DisclaimerText = chakra(Text, {
  baseStyle: {
    noOfLines: 1,
    fontSize: "0.7rem",
    h: "16px",
    w: "0px",
    transition: "all 0.2s ease",
    _groupHover: {
      w: "160px",
    },
  },
});
