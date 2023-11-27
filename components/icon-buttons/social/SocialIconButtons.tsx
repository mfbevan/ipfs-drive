import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSpotify,
  BsTiktok,
  BsTwitter,
  BsYoutube,
  BsLink45Deg,
} from "react-icons/bs";

import { BaseIconButton, LinkedIconProps } from "../base";

export const TwitterIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="twitter"
    href={href}
    icon={<BsTwitter />}
    aria-label="twitter"
    label={href}
  />
);

export const SpotifyIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="spotify"
    href={href}
    icon={<BsSpotify />}
    aria-label="spotify"
    label={href}
  />
);

export const FacebookIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="facebook"
    href={href}
    icon={<BsFacebook />}
    aria-label="facebook"
    label={href}
  />
);

export const YouTubeIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="red"
    href={href}
    icon={<BsYoutube />}
    aria-label="youtube"
    label={href}
  />
);

export const InstagramIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="pink"
    href={href}
    icon={<BsInstagram />}
    aria-label="instagram"
    label={href}
  />
);

export const TikTokIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    variant="black"
    href={href}
    icon={<BsTiktok />}
    aria-label="tiktok"
    label={href}
  />
);

export const GitHubIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="gray"
    href={href}
    icon={<BsGithub />}
    aria-label="github"
    label={href}
  />
);

export const LinkedInIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="linkedin"
    href={href}
    icon={<BsLinkedin />}
    aria-label="linkedin"
    label={href}
  />
);

export const WebsiteIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="gray"
    href={href}
    icon={<BsLink45Deg />}
    aria-label="website"
    label={href}
  />
);
