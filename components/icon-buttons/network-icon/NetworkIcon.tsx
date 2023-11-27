import { Image } from "@chakra-ui/react";
import { ChainIdOrNumber } from "@thirdweb-dev/sdk";
import { networkData } from "lib";

import { BaseIconButton } from "../base";

export interface NetworkIconProps {
  network: ChainIdOrNumber;
}

export const NetworkIcon = ({ network }: NetworkIconProps) => {
  const { name, image, colorScheme } = networkData[network];

  return (
    <BaseIconButton
      colorScheme={colorScheme}
      icon={<Image width="20px" height="20px" src={image} alt={name} />}
      aria-label={name}
      label={name}
      size="xs"
      boxSize="30px"
      rounded="xl"
    />
  );
};
