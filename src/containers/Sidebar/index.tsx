import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBar from "../../componentes/NavBar";
import ButtomTheme from "../../componentes/ButtomTheme";

type HeaderProps = {
  toggleTema: () => void;
};

export default function Header({ toggleTema }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["inicio", "habilidades", "projeto", "idiomas", "contato"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }
  return (
    <>
      <NavBar $isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} >
        <ButtomTheme onClick={toggleTema} />
      </NavBar>
    </>
  );
}
