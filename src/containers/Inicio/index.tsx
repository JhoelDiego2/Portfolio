import { Traducao } from "../../componentes/Traducao";
import { Titulo, Hero, Image, Section, IconsWrapper } from "./styles";
import { IconeHero } from "../../componentes/IconHero";

export function Inicio() {
  return (
    <Section>
      <Hero>
        <Titulo>
          <Traducao tKey="hero.linha1" />
        </Titulo>
        <Titulo>
          <Traducao tKey="hero.linha2" />
        </Titulo>
        <Titulo>
          <Traducao tKey="hero.linha3" />
        </Titulo>
        <p>
          <Traducao tKey="hero.linha4" />
        </p>

        <IconsWrapper>
          <IconeHero nome="github" />
          <IconeHero nome="linkedin" />
          <IconeHero nome="zap" />
        </IconsWrapper>
      </Hero>

      <Image />
    </Section>
  );
}