import { chakra, Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";

export interface WrappedImageProps extends FlexProps {
  src: string;
  alt: string;
}

export const WrappedImage = ({ src, alt, ...props }: WrappedImageProps) => (
  <ImageContainer {...props}>
    <ImageWrapper {...props}>
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
    </ImageWrapper>
  </ImageContainer>
);

const ImageContainer = chakra(Flex, {
  baseStyle: {
    position: "relative",
    w: "full",
    h: "full",
    justifyContent: "center",
    alignItems: "center",
    pt: "100%",
  },
});

const ImageWrapper = chakra(Flex, {
  baseStyle: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    rounded: "2xl",
    overflow: "hidden",
  },
});
