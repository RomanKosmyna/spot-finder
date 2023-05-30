"use client";

import { trackWidth, useAppSelector } from "@/src/hooks";
import MobileNavigation from "@/src/components/Navigation/MobileNavigation/MobileNavigation";

const NavigationContainer = () => {
  const innerWidth = trackWidth();
  const { toggleBurgerMenu } = useAppSelector(state => state.toggleReducer);

  return (
    <>
      {toggleBurgerMenu && (innerWidth != null) && innerWidth < 760 && <MobileNavigation />}
    </>
  );
};

export default NavigationContainer;