export const toggleOverflow = (arg: boolean) => {
  if (arg) {
    document.body.classList.add("bodyOverflowOpenedMobileMenu");
  } else {
    document.body.classList.remove("bodyOverflowOpenedMobileMenu");
  }
}