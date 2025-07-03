import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
interface TypewriterProps {
  text: string;
  speed?: number;
}

export function Typewriter({ text, speed = 50 }: TypewriterProps) {
    const { t } = useTranslation();
    const texto = t(text)
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); 
    let i = -1;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + texto[i]);
      i++;
      if (i === (texto.length -1)) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [texto, speed]);

  return (
    <>
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
    </>
  );
}
