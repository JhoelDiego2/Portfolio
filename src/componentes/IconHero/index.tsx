import { useTheme } from "styled-components";
import { Icone } from "./styles";

type IconeHeroProps = {
  nome: string;
  links:string;
};

export function IconeHero({ nome, links }: IconeHeroProps) {
  const theme = useTheme();

  return (
    <a href={`${links}`} target="_blank" rel="noopener noreferrer">
      <Icone nome={nome}>
        <img
          src={theme.cores[nome]}
          alt={nome}
          style={{ width: "100%", height: "100%" }}
        />
      </Icone>
    </a>
  );
}