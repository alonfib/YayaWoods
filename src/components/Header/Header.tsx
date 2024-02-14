import React from "react";
import { HeaderButtonContainer, HeaderDiv, HeaderTitle } from "./Header.styled";
import { useTranslation } from "react-i18next";
import GoToProfilePage from "../GoToProfilePage/GoToProfilePage";
import GoToHomePage from "../GoToHomePage/GoToHomePage";
import { useLocation } from "react-router-dom";

const goToHomePageRoutes = ["/profile", "/login", "/signup"];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <HeaderDiv>
      <HeaderTitle>{t("appTitle")}</HeaderTitle>
      <HeaderButtonContainer>
        {goToHomePageRoutes.includes(location.pathname) ? <GoToHomePage /> : <GoToProfilePage />}
      </HeaderButtonContainer>
    </HeaderDiv>
  );
};

export default Header;
