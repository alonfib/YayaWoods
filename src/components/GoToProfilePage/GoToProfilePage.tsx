import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoToProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToProfile = () => {
    navigate("/profile");
  };

  return <button onClick={goToProfile}>{t("goToProfile")}</button>;
};

export default GoToProfilePage;
