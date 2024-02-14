import React, { useEffect } from "react";
import stores, { storesContext } from "./mobx/storesIndex";
import AppRouter from "./AppRouter";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import i18n from "../i18n"; // should be unused
import { cacheRtl, theme } from "./utils/theme";

export default function App() {
  useEffect(() => {
    console.log("language", i18n.language);
  }, []);

  return (
    <storesContext.Provider value={stores}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </CacheProvider>
    </storesContext.Provider>
  );
}
