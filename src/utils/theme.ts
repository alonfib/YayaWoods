import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

declare module "@mui/material/styles" {
  interface PaletteOptions {}
}

export const theme = createTheme({
  direction: "rtl",
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
