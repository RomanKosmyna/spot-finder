import React from "react";
import styles from "./layout.module.css";
import Logo from "@/src/components/Logo/Logo";

export default function AuthLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <Logo/>
      {children}
    </main>
  );

}