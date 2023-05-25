import { type FC } from "react";
import AuthForm from "@/src/components/AuthForm/AuthForm";
import AuthNoAccount from "@/src/components/AuthNoAccount/AuthNoAccount";

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
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <AuthForm
        buttonText={formType === "login" ? "Sign In" : "Create Account"}
        route={pageRoute}
      />
      <AuthNoAccount
        status={status === "New Here?" ? "New Here?" : "Account holder?"}
        linkText={route === "login" ? "Register" : "Log In"}
        link={route === "login" ? "registration": "login"}
      />
    </>
  );
};

export default AuthContainer;