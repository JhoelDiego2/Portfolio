import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(classNames: string[] = []) {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    classNames.forEach((cls, index) => {
      sr.reveal(cls, {
        delay: 100 + index * 100,
        distance: "20px",
        origin: "bottom",
        duration: 800,
        interval: 100,
      });
    });
  }, [classNames]);
}
