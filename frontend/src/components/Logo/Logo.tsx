"use client";

import { useEffect, useState } from "react";

import styles from "./Logo.module.css";

const Logo = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(currentWord => (currentWord + 1) % 2);
    }, 4000);

    return () => { clearInterval(interval); };
  }, []);

  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${currentWord === 0 ? styles.word1 : ""}`}>
        Spot
      </span>
      &nbsp;
      <span className={`${styles.name} ${currentWord === 1 ? styles.word2 : ""}`}>
        Finder
      </span>
    </div>
  );
};


export default Logo;