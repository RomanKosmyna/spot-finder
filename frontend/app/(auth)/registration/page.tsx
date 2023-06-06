import AuthContainer from "@/src/components/Auth/AuthContainer/AuthContainer";

import styles from "../../../src/styles/page.module.css";

export default function Registration() {
  return (
    <div className={styles.auth}>
      <AuthContainer
        heading={"Register"}
        formType={"register"}
      />
    </div>
  );
}