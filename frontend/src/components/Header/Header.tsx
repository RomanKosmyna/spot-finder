import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      {/* <nav className={styles.navigation}> */}
      {/*  <ul className={styles.ul}> */}
      {/*    <li className={styles.li}> */}
      {/*      <Link href={"/"}>Home</Link> */}
      {/*    </li> */}

      {/*    <li className={styles.li}> */}
      {/*      <Link href={"/top"}>Best Venues</Link> */}
      {/*    </li> */}

      {/*    <li className={styles.li}> */}
      {/*      <Link href={"/puyachok"}>Puyachok</Link> */}
      {/*    </li> */}

      {/*    <li className={styles.li}> */}
      {/*      <Link href={"/settings"}>Settings</Link> */}
      {/*    </li> */}
      {/*  </ul> */}
      {/* </nav> */}
    </header>
  );
};

export default Header;