import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerScope}>
        <ol className={styles.scopeList}>
          <li className={styles.scopeListItem}>
            <Link href={"/"}>
              <Image
                src={"/img/logo(white version).png"}
                // width={85}
                // height={42.5}
                fill
                alt={"Hexagon logo"}
              />
            </Link>
          </li>
          <li className={styles.scopeListItem}>

          </li>
        </ol>
      </div>
    </header>
  );
};

export default Header;