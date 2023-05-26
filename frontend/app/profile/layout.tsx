import React from "react";
import Header from "@/src/components/Header/Header";

import styles from "./layout.module.css";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}