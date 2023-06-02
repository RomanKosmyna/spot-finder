"use client";

import { type FC } from "react";
import Link from "next/link";

import styles from "./GeneralButton.module.css";

interface IProps {
  text: string;
  id: string;
}

const GeneralButton: FC<IProps> = ({text, id}) => {

  return (
    <Link
      href={`/venue/${id}`}
      className={styles.btn}
    >
      {text}
    </Link>
  );
};

export default GeneralButton;