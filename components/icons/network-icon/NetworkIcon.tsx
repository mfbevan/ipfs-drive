import { ChainIdOrNumber } from "@thirdweb-dev/sdk";
import Image from "next/image";

import { networkData } from "@/lib";

export interface NetworkIconProps {
  network: ChainIdOrNumber;
  size?: number;
}

export const NetworkIcon = ({ network, size = 16 }: NetworkIconProps) => {
  const { name, image } = networkData[network];

  return (
    <Image
      src={image}
      alt={name}
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};
