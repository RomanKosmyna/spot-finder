import { useEffect } from "react";

export const toggleOverflow = (arg: boolean) => {
  useEffect(() => {
    if (arg) {
      document.body.classList.add("bodyOverflowOpenedMobileMenu");
    } else {
      document.body.classList.remove("bodyOverflowOpenedMobileMenu");
    }
  },[arg])
}