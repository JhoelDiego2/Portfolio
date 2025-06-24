import styled from "styled-components";
import { motion } from "framer-motion";
import { DivPai, Linha, Menu, Lista, Link } from "./styles";

type MenuHamburguerProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuHamburguer({
  mobileMenuOpen,
  setMobileMenuOpen
}: MenuHamburguerProps) {
  return (
    <>
      <DivPai as={motion.div} onClick={() => setMobileMenuOpen(prev => !prev)} mobileMenuOpen={mobileMenuOpen}>
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen} />
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen}/>
        <Linha as={motion.div} mobileMenuOpen={mobileMenuOpen}/>
      </DivPai>

      <Menu as={motion.div} mobileMenuOpen={mobileMenuOpen}>
        <Lista as={motion.ul}>
          {["Inicio", "Habilidades", "Projetos", "Idiomas", "Contato"].map(
            (item) => (
              <Link as={motion.li} key={item}>
                {item}
              </Link>
            )
          )}
        </Lista>
      </Menu>
    </>
  );
}