import { useEffect, useState } from "react";

export const trackScroll = () => {
  const [scrollY, setScrollY] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);
  return scrollY;
};