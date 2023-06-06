import Header from "@/src/components/Header/Header";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <Header />
    </div>
  );
};

export default Navigation;