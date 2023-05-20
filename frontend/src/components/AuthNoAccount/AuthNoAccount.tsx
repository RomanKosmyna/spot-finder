import { type FC } from "react";
import Link from "next/link";

import styles from "./AuthNoAccount.module.css";

interface ILink {
  status: string;
  link: string;
  linkText: string;
}

const AuthNoAccount: FC<ILink> = ({status, link, linkText}) => {

  return (
    <div className={styles.registerContainer}>
      <span className={styles.newHereContainer}>
        <h3 className={styles.newHere}>
          {status}
        </h3>
      </span>
      <Link href={`/${link}`} className={styles.registerBtn}>
        {linkText}
      </Link>
    </div>
  );
};

export default AuthNoAccount;