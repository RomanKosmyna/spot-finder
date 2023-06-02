"use client";

import React, { type FC, useState } from "react";
import { useRouter } from "next/navigation";
import { urls } from "@/src/configs";
import axios, { type AxiosResponse } from "axios";

import styles from "./AuthForm.module.css";
import { apiService } from "@/src/services";

interface IProps {
  buttonText: string;
  route?: string;
}

const AuthForm: FC<IProps> = ({ buttonText, route }) => {
  const [target, setTarget] = useState("");
  const router = useRouter();

  const inputFocused = (inputId: string) => {
    setTarget(inputId);
  };

  const inputNotFocused = (el: React.FocusEvent<HTMLInputElement>) => {
    if (el.target.value.length === 0) setTarget("");
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const data = {
      email: (event.target as HTMLFormElement).email.value,
      username: (event.target as HTMLFormElement).username.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    const endpoint = `${apiService}${route === "login" ? urls.login : urls.registration}`;
    
    try {
      const response: AxiosResponse = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        router.push(route === "login" ? "/" : "/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className={styles.form} onSubmit={async (event) => {
      await handleSubmit(event);
    }}>
      <div className={styles.inputContainer}>
        <label
          htmlFor="email"
          className={`${styles.inputLabel} 
          ${target === "email" ? styles.focusedLabel : ""} `}
        >
          Email
        </label>
        <input type="text" id={"email"}
               onFocus={() => {
                 inputFocused("email");
               }}
               onBlur={(el) => {
                 inputNotFocused(el);
               }}
               required={true}
               pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
               title="Email should follow and example: example@domain.com"
        />
      </div>
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
               required={true}
               pattern="[a-zA-Z0-9]{4,10}"
               title="Username length should be 4-10 characters.
               It can consist of digits (0 to 9) and alphabets (a to z)."
        />
      </div>
      <div className={styles.inputContainer}>
        <label
          htmlFor="password"
          className={`${styles.inputLabel} ${target === "password" ? styles.focusedLabel : ""} `}
        >
          Password
        </label>
        <input type="password" id={"password"}
               onFocus={() => {
                 inputFocused("password");
               }}
               onBlur={(el) => {
                 inputNotFocused(el);
               }}
               required={true}
               pattern="[a-zA-Z0-9!@#$%^&*()_+-=]{6,14}"
               title="Password length should be 6-14 characters.
               It can consist of digits (0 to 9), alphabets (a to z) and symbols (!@#$%^&*()_+-=)."
        />
      </div>
      <button type={"submit"} className={styles.btn}>
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;