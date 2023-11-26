import { WalletAddress } from "@thirdweb-dev/react";

import { AvatarType } from "./avatar.service.interface";

export class AvatarService {
  public static getAvatarUrl(
    address: WalletAddress,
    avatarType: AvatarType = "retro"
  ) {
    return `https://www.gravatar.com/avatar/${address}?d=${avatarType}&f=y`;
  }
}
