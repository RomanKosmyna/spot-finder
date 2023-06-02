import { type FC } from "react";

import styles from "./VenueBadge.module.css";

interface IProps {
  tag: string;
  index: number;
}
const colorMapping = {
  0: "purple",
  1: "green",
  2: "orange",
  3: "blue"
};

const VenueBadge: FC<IProps> = ({ tag, index }) => {
  const colorIndex = index % Object.keys(colorMapping).length;

  return (
    <span className={`${styles.container} ${styles[colorMapping[colorIndex]]}`}>
      {tag}
    </span>
  );
};

export default VenueBadge;