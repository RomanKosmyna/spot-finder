import { type FC } from "react";
import Link from "next/link";

import styles from "./Navigation.module.css";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

interface IProps {
  version: "mobile" | "desktop";
}

const Navigation: FC<IProps> = ({ version }) => {

  return (
    <nav className={`${styles.navigation} ${version === "mobile" ? styles.mobileNav : styles.desktopNav}`}>
      <ul className={`${styles.ul} ${version === "mobile" ? styles.mobile : styles.desktop}`}>
        <li className={styles.li}>
          <Link href={"/"}>
            <HomeRoundedIcon className={version === "mobile" ? styles.mobileIcon : styles.desktopIcon} />
            <span>Home</span>
          </Link>
        </li>

        <li className={styles.li}>
          <Link href={"/"}>
            <AutoAwesomeRoundedIcon className={version === "mobile" ? styles.mobileIcon : styles.desktopIcon}/>
            <span>Best Venues</span>
          </Link>
        </li>

        <li className={styles.li}>
          <Link href={"/"}>
            <LocalCafeRoundedIcon className={version === "mobile" ? styles.mobileIcon : styles.desktopIcon}/>
            <span>Puyachok</span>
          </Link>
        </li>

        <li className={styles.li}>
          <Link href={"/profile"}>
            <SettingsRoundedIcon className={version === "mobile" ? styles.mobileIcon : styles.desktopIcon} />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;