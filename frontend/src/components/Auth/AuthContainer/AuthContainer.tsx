import React, { type FC } from "react";
import AuthForm from "@/src/components/Auth/AuthForm/AuthForm";
import AuthNoAccount from "@/src/components/Auth/AuthNoAccount/AuthNoAccount";
import Logo from "@/src/components/Logo/Logo";

import styles from "./AuthContainer.module.css";

interface IProps {
  heading: string;
  formType: string;
  status?: string;
  route?: string;
  pageRoute?: string;
}

const AuthContainer: FC<IProps> = ({ heading, formType, status, route, pageRoute }) => {

  return (
    <div style={{width: "100%"}}>
      <Logo />
      <h2 className={styles.heading}>{heading}</h2>
      <AuthForm
        buttonText={formType === "login" ? "Sign In" : "Create Account"}
        route={pageRoute}
      />
      <AuthNoAccount
        status={status === "New Here?" ? "New Here?" : "Account holder?"}
        linkText={route === "login" ? "Register" : "Log In"}
        link={route === "login" ? "registration" : "login"}
      />
    </div>
  );
};

export default AuthContainer;