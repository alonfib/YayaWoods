import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { firebaseAuth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput/TextInput";
import { useTranslation } from "react-i18next";
import GoToHomePage from "../../../components/GoToHomePage/GoToHomePage";
import { storesContext } from "../../../mobx/storesIndex";
import { LoginButton, LoginButtonsContainer, LoginFieldsContainer, LoginSignupContainer } from "./LoginPage.styled";

const LoginPage: React.FC = () => {
  const { userStore } = useContext(storesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const signIn = await signInWithEmailAndPassword(firebaseAuth, email, password);
      userStore.getUserData(signIn.user);
      navigate("/");

      // Redirect or perform any other actions after successful login
    } catch (error: any) {
      setError(error?.message);
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <LoginSignupContainer>
      <h2>{t("loginTitle")}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <LoginFieldsContainer>
          <TextInput
            title={t("email")}
            inputMode="email"
            dir="ltr"
            placeholder={t("email")}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            title={t("password")}
            type="password"
            placeholder={t("password")}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </LoginFieldsContainer>
        <LoginButtonsContainer>
          <LoginButton onClick={goToSignup}>{t("signup")}</LoginButton>
          <LoginButton type="submit">{t("login")}</LoginButton>
        </LoginButtonsContainer>
      </form>
    </LoginSignupContainer>
  );
};

export default LoginPage;
