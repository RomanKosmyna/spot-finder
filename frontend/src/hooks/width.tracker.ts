import { useEffect, useState } from "react";

export const trackWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    }
  },[])

  return innerWidth;
}