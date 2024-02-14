import React, { useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { storesContext } from "../../mobx/storesIndex";
import { useTranslation } from "react-i18next";
import GoToHomePage from "../../components/GoToHomePage/GoToHomePage";

const ProfilePage = () => {
  const { userStore } = useContext(storesContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (userStore.userData.name === "") {
        navigate("/login");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(firebaseAuth);
    userStore.clearUserData();
    navigate("/login");
  };

  return (
    <div>
      <h2>
        {t("welcom")}, {userStore.userData.name}
      </h2>
      <p>
        {t("email")}: {userStore.userData.email}
      </p>
      <button onClick={handleLogout}>{t("logout")}</button> {/* New "Logout" button */}
      <GoToHomePage />
      {/* Display other user info here */}
    </div>
  );
};

export default ProfilePage;
