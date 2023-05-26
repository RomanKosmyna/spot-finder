"use client";

import { toggleActions } from "@/src/redux/slices/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux.hooks";
import Navigation from "@/src/components/Navigation/Navigation/Navigation";
import { trackWidth } from "@/src/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./Header.module.css";

const Header = () => {
  const { toggleBurgerMenu } = useAppSelector(state => state.toggleReducer);
  const dispatch = useAppDispatch();
  const innerWidth = trackWidth();
  const location = useRouter();

  const openMenu = () => {
    return dispatch(toggleActions.toggleBurgerMenu(!toggleBurgerMenu));
  };

  useEffect(() => {
    dispatch(toggleActions.toggleBurgerMenu(false));
  },[location]);

  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      {innerWidth < 760 &&
        <button className={styles.burgerBtn} onClick={openMenu}>
          <MenuRoundedIcon className={styles.burgerIcon} />
        </button>
      }
      {innerWidth > 760 && <Navigation version={"desktop"} />}
    </header>
  );
};

export default Header;