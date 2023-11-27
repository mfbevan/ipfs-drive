import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { semanticTokens } from "./semantic-tokens";
import {
  Text,
  NumberInput,
  Input,
  Select,
  Textarea,
  Button,
  IconButton,
  Tooltip,
} from "./variants";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  semanticTokens,
  components: {
    IconButton,
    Text,
    NumberInput,
    Input,
    Textarea,
    Select,
    Button,
    Tooltip,
  },
  styles: {
    global: {
      body: {
        bg: "pageBg",
      },
    },
  },
  shadows: {
    outline: "0 0 0 1px accent.400",
  },
});
