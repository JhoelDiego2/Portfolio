import { motion } from "framer-motion";
import {
  NavStyled,
  UlStyled,
  LiStyled, 
  Circle, 
} from './styles';
import MenuHamburguer from "../MenuHamburguer";
import { useTranslation } from "react-i18next";

const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

type NavBarProps = {
  children?: React.ReactNode;
  $isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onNavClick: (sectionId: string) => void;
  activeSection: string;
};

export default function NavBar({
  children,
  $isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavClick,
  activeSection,
}: NavBarProps) {
  const { t } = useTranslation();

  // Lista de seções com id (para scroll) e chave de tradução
  const menuItems = [
    { id: "inicio", label: t("nav.inicio") },
    { id: "habilidades", label: t("nav.habilidades") },
    { id: "projetos", label: t("nav.projetos") },
    { id: "idiomas", label: t("nav.idiomas") },
    { id: "contato", label: t("nav.contato") },
  ];

  return (
    <NavStyled
      as={motion.nav}
      initial="hidden"
      animate="visible"
      variants={listVariants}
      $isScrolled={$isScrolled}
    >
      <motion.p initial="hidden" animate="visible" variants={itemVariants}>
        Jhoel
        <Circle as={motion.span} initial="hidden" animate="visible" variants={itemVariants} />
      </motion.p>

      <UlStyled as={motion.ul}>
        {menuItems.map(({ id, label }) => (
          <LiStyled
            as={motion.li}
            key={id}
            variants={itemVariants}
            mobileMenuOpen={mobileMenuOpen}
            className={activeSection === id ? "active" : ""}
            onClick={() => {
              onNavClick(id);
              setMobileMenuOpen(false);
            }}
          >
            {label}
          </LiStyled>
        ))}
        {children}
      </UlStyled>

    <MenuHamburguer
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      onNavClick={onNavClick}
    />
    </NavStyled>
  );
}