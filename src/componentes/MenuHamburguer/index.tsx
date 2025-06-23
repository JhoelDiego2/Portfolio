import styled from "styled-components";
import { motion } from "framer-motion";
import { DivPai, Linha, Menu, Lista, Link } from "./styles";
export default function MenuHamburguer() {
  return (
    <>
      <DivPai as={motion.div}>
        <Linha as={motion.div} />
        <Linha as={motion.div} />
        <Linha as={motion.div} />
      </DivPai>
      <Menu as={motion.div}>
        <Lista as={motion.ul}>
          {["Inicio", "Habilidades", "Projetos", "Idiomas", "Contato"].map(
            (item) => (
              <Link as={motion.li} key={item} >
                {item}
              </Link>
            )
          )}
        </Lista>
      </Menu>
    </>
  );
}
