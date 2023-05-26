"use client";

import Header from "@/src/components/Header/Header";
import MobileNavigation from "@/src/components/Navigation/MobileNavigation/MobileNavigation";
import { useAppSelector } from "@/src/hooks/redux.hooks";
import { trackWidth } from "@/src/hooks";

export default function Home() {
  const {toggleBurgerMenu} = useAppSelector(state => state.toggleReducer);
  const innerWidth = trackWidth();

  return (
    <main>
      <Header />
      {toggleBurgerMenu && innerWidth < 760 && <MobileNavigation />}
    </main>
  );
}
