import { useColorMode } from "@chakra-ui/react";
import { ConnectWallet, darkTheme, lightTheme } from "@thirdweb-dev/react";
import { FaWallet } from "react-icons/fa";

import { BaseIconButton } from "../icon-buttons";

const connectTheme = {
  colors: {
    accentText: "#629d87",
    accentButtonBg: "#629d87",
  },
};

export const StatefulConnectButton = () => {
  const { colorMode } = useColorMode();
  const theme =
    colorMode === "light" ? lightTheme(connectTheme) : darkTheme(connectTheme);

  return (
    <ConnectWallet
      style={{
        height: "40px",
        borderRadius: "0.75rem",
        backgroundColor: "accent.500",
      }}
      className="text-base btn btn-primary"
      theme={theme}
      detailsBtn={() => (
        <BaseIconButton
          colorScheme="accent"
          icon={<FaWallet />}
          aria-label="connect-wallet"
          label="Wallet"
          size="xs"
          boxSize="40px"
          rounded="xl"
        />
      )}
    />
  );
};
