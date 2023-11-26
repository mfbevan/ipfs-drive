import Image from "next/image";

import { AvatarService } from "@/lib";
export interface AvatarProps {
  address: string;
  size?: number;
}

export const Avatar = ({ address, size = 12 }: AvatarProps) => {
  const avatar = AvatarService.getAvatarUrl(address);

  return (
    <div className={`w-${size} rounded-full bg-neutral text-neutral-content`}>
      <Image
        src={avatar}
        alt={address}
        fill
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};
