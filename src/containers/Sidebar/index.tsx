import { useState, useEffect } from "react";
import NavBar from "../../componentes/NavBar";
import ButtomTheme from "../../componentes/ButtomTheme";
import { SelectLanguage } from "../../componentes/Select";
import { useTranslation } from 'react-i18next';
type HeaderProps = {
  toggleTema: () => void;
};

export default function Header({ toggleTema }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["inicio", "habilidades", "projetos", "idiomas", "contato"];
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
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <NavBar
      $isScrolled={isScrolled}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      onNavClick={handleNavClick}
      activeSection={activeSection}
    >
      <ButtomTheme onClick={toggleTema} />
      <SelectLanguage />
    </NavBar>
  );
}