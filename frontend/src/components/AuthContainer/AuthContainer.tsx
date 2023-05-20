import { type FC } from "react";
import AuthForm from "@/src/components/AuthForm/AuthForm";
import AuthNoAccount from "@/src/components/AuthNoAccount/AuthNoAccount";

import styles from "./AuthContainer.module.css";

interface IProps {
  heading: string;
  formType: string;
  status: string;
  route: string;
}

const AuthContainer: FC<IProps> = ({ heading, formType, status, route }) => {

  return (
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <AuthForm
        buttonText={formType === "login" ? "Sign In" : "Create Account"}
      />
      <AuthNoAccount
        status={status === "New Here?" ? "New Here?" : "Account holder?"}
        linkText={route === "login" ? "Register" : "Log In"}
        link={route === "login" ? "register": "login"}
      />
    </>
  );
};

export default AuthContainer;