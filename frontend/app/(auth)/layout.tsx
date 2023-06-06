"use client";

import AuthHeader from "@/src/components/Auth/AuthHeader/AuthHeader";
import { useAppSelector } from "@/src/hooks";

import styles from "./layout.module.css";
import { useEffect, useState } from "react";

export default function AuthLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const {toggleThemeMode} = useAppSelector(state => state.toggleReducer);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  },[])

  return (
    <div style={{visibility: isMounted ? "visible" : "hidden"}}>
      <main className={styles.main}
            data-theme={toggleThemeMode ? "dark" : "light"}
      >
        <AuthHeader />
        {children}
      </main>
    </div>
  );

}