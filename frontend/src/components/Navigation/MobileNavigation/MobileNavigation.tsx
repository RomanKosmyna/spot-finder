import Navigation from "@/src/components/Navigation/Navigation/Navigation";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import { toggleActions } from "@/src/redux/slices/toggleSlice";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import styles from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const dispatch = useAppDispatch();
  const {toggleBurgerMenu} = useAppSelector(state => state.toggleReducer);

  const closeMenu = () => {
    return dispatch(toggleActions.toggleBurgerMenu(!toggleBurgerMenu));
  };

  return (
    <div className={styles.container}>
      <Navigation version={"mobile"} />
      <button className={styles.burgerBtn} onClick={closeMenu}>
        <CloseRoundedIcon className={styles.burgerIcon} />
      </button>
    </div>
  );
};

export default MobileNavigation;