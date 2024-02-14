import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { storesContext } from "./mobx/storesIndex";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/ProfilePage/SignUpPage/SignupPage";
import LoginPage from "./pages/ProfilePage/LoginPage/LoginPage";
import Header from "./components/Header/Header";

const AppRouter = observer(() => {
  const [isAppReady, setIsAppReady] = useState(false);

  const loadApp = async () => {
    if (!isAppReady) {
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
      <Header />
      <div className="router-container" style={{ height: "100vh", padding: 16 }}>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/login" Component={LoginPage} />
        </Routes>
      </div>
    </Router>
  );
});

export default AppRouter;
