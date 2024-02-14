import React, { useContext } from "react";
import { storesContext } from "../../mobx/storesIndex";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const HomePage: React.FC = observer(() => {
  const { userStore } = useContext(storesContext);
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("homePageWelcom")}</h1>
      {userStore.userData.name && (
        <h2>
          {t("user")}: {userStore.userData.name}
        </h2>
      )}
    </div>
  );
});

export default HomePage;
