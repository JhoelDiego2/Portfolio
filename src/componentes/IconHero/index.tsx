import { Icone } from "./styles";

type IconeHeroProps = {
  nome: "github" | "linkedin" | "zap";
};

export function IconeHero({ nome }: IconeHeroProps) {
  return <Icone nome={nome} />;
}