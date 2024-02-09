import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { storesContext } from "./mobx/storesIndex";
import HomePage from "./pages/HomePage/HomePage";

const AppRouter = observer(() => {
  const { userStore } = useContext(storesContext);
  const [isAppReady, setIsAppReady] = useState(false);

  const loadApp = async () => {
    if (!isAppReady) {
      console.log("loading app...");
      await userStore.getUserData();
      console.log("app loaded");

      setIsAppReady(true);
    }
  };

  useEffect(() => {
    loadApp();
  }, []);

  if (!isAppReady) {
    return "loading...";
  }
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Routes>
    </Router>
  );
});

export default AppRouter;
