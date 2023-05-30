import { useEffect, useState } from "react";

export const trackWidth = () => {
  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      window.addEventListener("resize", handleWidth);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWidth);
      }
    };
  }, []);

  return innerWidth;
};