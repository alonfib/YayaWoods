import React, { useContext } from "react";
import { useFormik } from "formik";
import { firebaseAuth } from "../../../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput/TextInput";
import { useTranslation } from "react-i18next";
import GoToHomePage from "../../../components/GoToHomePage/GoToHomePage";
import { storesContext } from "../../../mobx/storesIndex";
import { SignUpButton, SignUpButtonsContainer, SignUpFieldsContainer } from "./SignupPage.styles";
import { LoginSignupContainer } from "../LoginPage/LoginPage.styled";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { userStore } = useContext(storesContext);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: { [field: string]: string } = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, values.email, values.password);
        await updateProfile(userCredential.user, { displayName: values.name });
        await userStore.createFireBaseUser(userCredential.user);
        navigate("/");
      } catch (error: any) {
        formik.setErrors({ email: error?.message ?? "An error occurred" });
      }
    },
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <LoginSignupContainer>
      <h2>{t("signupTitle")}</h2>
      <form onSubmit={formik.handleSubmit}>
        <SignUpFieldsContainer>
          <TextInput title={t("name")} name="name" inputMode="text" placeholder={t("name")} onChange={formik.handleChange} />
          <TextInput
            title={t("email")}
            inputMode="email"
            dir="ltr"
            name="email"
            placeholder={t("email")}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextInput
            title={t("password")}
            type="password"
            name="password"
            placeholder={t("password")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </SignUpFieldsContainer>
        <SignUpButtonsContainer>
          <SignUpButton type="submit">{t("signup")}</SignUpButton>
          <SignUpButton onClick={goBack}>{t("goBack")}</SignUpButton>
        </SignUpButtonsContainer>
      </form>
    </LoginSignupContainer>
  );
};

export default SignupPage;
