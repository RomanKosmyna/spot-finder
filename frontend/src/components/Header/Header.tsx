"use client";

import { toggleActions } from "@/src/redux/slices/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux.hooks";
import Navigation from "@/src/components/Navigation/Navigation/Navigation";
import { trackScroll, trackWidth } from "@/src/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import websiteLogo from "../../../public/img/logo(dark version).png";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./Header.module.css";
import { toggleOverflow } from "@/src/hooks/body.overflow-y";
import Image from "next/image";

const Header = () => {
  const { toggleBurgerMenu } = useAppSelector(state => state.toggleReducer);
  const dispatch = useAppDispatch();
  const location = useRouter();

  const innerWidth = trackWidth();
  const scrollY = trackScroll();

  toggleOverflow(toggleBurgerMenu);

  const openMenu = () => {
    return dispatch(toggleActions.toggleBurgerMenu(!toggleBurgerMenu));
  };

  useEffect(() => {
    dispatch(toggleActions.toggleBurgerMenu(false));
  }, [location]);

  return (
    <header className={`${styles.container} ${scrollY > 0 ? styles.headerBorderOnScroll : ""}`}>
      <h1 className={styles.heading}>
        <Image
          src={websiteLogo}
          alt={"Logo image"}
          width={100}
          height={50}
          priority={true}
        />
      </h1>
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