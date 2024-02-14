import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoToHomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return <button onClick={handleGoToHomePage}>{t("homepage")}</button>;
};

export default GoToHomePage;
