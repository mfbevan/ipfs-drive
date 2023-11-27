import { useColorMode } from "@chakra-ui/react";

export const nexethBannerTransparentLight = "/logos/nexeth-banner-transparent-light.png";
export const nexethBannerTransparentDark = "/logos/nexeth-banner-transparent-dark.png";

export const nexethBannerLight = "/logos/nexeth-banner-light.jpeg";
export const nexethBannerDark = "/logos/nexeth-banner-dark.jpeg";

export const nexethLogoLight = "/logos/nexeth-logo-light.jpeg";
export const nexethLogoDark = "/logos/nexeth-logo-dark.jpeg";

export const nexethLogoTransparent = "/logos/nexeth-logo-transparent.png";

export const useNexethLogo = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? nexethLogoLight : nexethLogoDark;
};

export const useNexethBanner = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? nexethBannerLight : nexethBannerDark;
};

export const useNexethBannerTransparent = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? nexethBannerTransparentLight : nexethBannerTransparentDark;
};
