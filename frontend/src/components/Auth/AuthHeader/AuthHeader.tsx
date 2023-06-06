"use client";

import Image from "next/image";
import ThemeMode from "@/src/components/Auth/AuthThemeMode/AuthThemeMode";

import styles from "./AuthHeader.module.css";
import { useAppSelector } from "@/src/hooks";

const AuthHeader = () => {
  const { toggleThemeMode } = useAppSelector(state => state.toggleReducer);

  return (
    <header className={styles.authHeader}>
      <div className={styles.score}>
        {toggleThemeMode ? <Image
          src={"/img/logo(white version).png"}
          alt={"Spot Finder logo"}
          width={90}
          height={45}
          priority={true}
        /> : <Image
          src={"/img/logo(dark version).png"}
          alt={"Spot Finder logo"}
          width={90}
          height={45}
          priority={true}
        />}
      </div>
      <div className={styles.settings}>
        <ThemeMode />
      </div>
    </header>
  );
};

export default AuthHeader;