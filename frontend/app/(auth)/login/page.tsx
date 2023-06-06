import AuthContainer from "@/src/components/Auth/AuthContainer/AuthContainer";

import styles from "../../../src/styles/page.module.css";

export default function Login() {
  return (
    <div className={styles.auth}>
      <AuthContainer
        heading={"Login To Your Account"}
        formType={"login"}
        status={"New Here?"}
        route={"login"}
        pageRoute={"login"}
      />
    </div>
  );
}