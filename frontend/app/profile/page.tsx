"use client";

import { trackWidth, useAppSelector } from "@/src/hooks";
import MobileNavigation from "@/src/components/Navigation/MobileNavigation/MobileNavigation";
import DefaultProfile from "@/src/components/Profile/DefaultProfile/DefaultProfile";
import AddVenue from "@/src/components/AddVenue/AddVenue";

export default function Profile() {
  const { toggleBurgerMenu, toggleAddVenue } = useAppSelector(state => state.toggleReducer);
  const innerWidth = trackWidth();

  return (
    <>
      {toggleBurgerMenu && innerWidth < 760 && <MobileNavigation />}
      {toggleAddVenue && <AddVenue />}
      <DefaultProfile />
    </>
  );
}