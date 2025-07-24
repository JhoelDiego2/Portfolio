import { useTheme } from "styled-components";
import { Icone } from "./styles";
import { motion } from 'framer-motion'

type IconeHeroProps = {
  nome: string;
  links: string;
  delay: number;
};

export function IconeHero({ nome, links, delay }: IconeHeroProps) {
  const theme = useTheme();

  return (
    <a href={`${links}`} target="_blank" rel="noopener noreferrer">
      <Icone nome={nome} 
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay }}
      >
        <img
          src={theme.cores[nome]}
          alt={nome}
          style={{ width: "100%", height: "100%" }}
        />
      </Icone>
    </a>
  );
}
