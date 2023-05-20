"use client";

import React, { type FC, useState } from "react";

import styles from "./AuthForm.module.css";

interface IProps {
  buttonText: string;
}

const AuthForm: FC<IProps> = ({ buttonText }) => {
  const [target, setTarget] = useState("");

  const inputFocused = (inputId: string) => {
    setTarget(inputId);
  };

  const inputNotFocused = (el: React.FocusEvent<HTMLInputElement>) => {
    if (el.target.value.length === 0) setTarget("");
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label
          htmlFor="username"
          className={`${styles.inputLabel} 
          ${target === "username" ? styles.focusedLabel : ""} `}
        >
          Username
        </label>
        <input type="text" id={"username"}
               onFocus={() => {
                 inputFocused("username");
               }}
               onBlur={(el) => {
                 inputNotFocused(el);
               }}
        />
      </div>
      <div className={styles.inputContainer}>
        <label
          htmlFor="password"
          className={`${styles.inputLabel} ${target === "password" ? styles.focusedLabel : ""} `}
        >
          Password
        </label>
        <input type="text" id={"password"}
               onFocus={() => {
                 inputFocused("password");
               }}
               onBlur={(el) => {
                 inputNotFocused(el);
               }}
        />
      </div>
      <button className={styles.btn}>
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;