import { chakra, Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";

export interface SquareImageProps extends FlexProps {
  src: string;
  alt: string;
}

export const SquareImage = ({ src, alt, ...props }: SquareImageProps) => (
  <ImageContainer {...props}>
    <ImageWrapper>
      <Image
        src={src}
        alt="background-image"
        fill
        style={{ objectFit: "cover", opacity: 0.5, filter: "blur(10px)" }}
      />
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
