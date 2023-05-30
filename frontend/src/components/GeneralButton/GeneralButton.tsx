import { type FC } from "react";

import styles from "./GeneralButton.module.css";

interface IProps {
  text: string;
}

const GeneralButton: FC<IProps> = ({text}) => {
  return (
    <button type="submit" className={styles.btn}>
      {text}
    </button>
  );
};

export default GeneralButton;