import { motion } from "framer-motion";
import { DivPai, Linha, Menu, Lista, Link } from "./styles";
import { useTranslation } from "react-i18next";
const variants = {
  hidden: { opacity: 0, y: -10 }, // Estado inicial: invisível e deslocado para cima
  visible: { opacity: 1, y: 0 },  // Estado final: visível e na posição normal
};

type MenuHamburguerProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onNavClick: (sectionId: string) => void;
};

export default function MenuHamburguer({
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavClick
}: MenuHamburguerProps) {
  const { t } = useTranslation();

  const menuItems = [
    { id: "inicio", label: t("nav.inicio") },
    { id: "habilidades", label: t("nav.habilidades") },
    { id: "projetos", label: t("nav.projetos") },
    { id: "idiomas", label: t("nav.idiomas") },
    { id: "contato", label: t("nav.contato") },
  ];

  return (
    <>
      <DivPai
        as={motion.div}
        onClick={() => setMobileMenuOpen(prev => !prev)}
        mobileMenuOpen={mobileMenuOpen}
        aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setMobileMenuOpen(prev => !prev); }}
          variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen} />
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen} />
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen} />
      </DivPai>

      <Menu as={motion.div} mobileMenuOpen={mobileMenuOpen}>
        <Lista as={motion.ul}>
          {menuItems.map(({ id, label }) => (
            <Link
              as={motion.li}
              key={id}
              onClick={() => {
                onNavClick(id);
                setMobileMenuOpen(false);
              }}
              tabIndex={0}
              role="link"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onNavClick(id);
                  setMobileMenuOpen(false);
                }
              }}
            >
              {label}
            </Link>
          ))}
        </Lista>
      </Menu>
    </>
  );
}