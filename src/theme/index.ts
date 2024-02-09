import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeObj: ThemeOverride = {
  config: { initialColorMode: "system", useSystemColorMode: false },
  fonts: {
    body: `'Open Sans', sans-serif`,
  },
  styles: {},
};
export const theme = extendTheme(themeObj);
