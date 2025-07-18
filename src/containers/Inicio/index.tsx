import { Traducao } from "../../componentes/Traducao";
import {
  Hero,
  Image,
  Content,
  IconsWrapper,
  Section,
  Gradiant,
  StytledDiv,
  Seta,
} from "./styles";
import { IconeHero } from "../../componentes/IconHero";
import jhoel from "../../assets/img/jhoel_sem_fundo.png";
import { Typewriter } from "../../componentes/Typewriter";
import { Circle } from "../../componentes/NavBar/styles";
import { TituloSub } from "../../componentes/Titulo";
import { Flutuante } from "../../componentes/Flutuante";
export function Inicio() {
  return (
    <Section id="inicio">
      <Hero>
        <Gradiant />
        <Content>
          <span>
            <TituloSub titulo={false} justify="flex-start">
              <Traducao tKey="hero.linha1" />
              &nbsp;&nbsp;&nbsp;
              <Traducao tKey="hero.linha2" />
              <Circle />
            </TituloSub>
          </span>
          <TituloSub titulo={true} justify="flex-start">
            <Typewriter text="hero.linha3" />
          </TituloSub>
          <p>
            <Traducao tKey="hero.linha4" />
          </p>
          <IconsWrapper>
            <IconeHero nome="github" links="https://github.com/JhoelDiego2" />
            <IconeHero
              nome="linkedin"
              links="https://www.linkedin.com/in/jhoeldiego"
            />
            <IconeHero nome="zap" links="wa.link/z8gp33" />
            <IconeHero nome="email" links="mailto:jhoeldiego22@gmail.com" />
          </IconsWrapper>
        </Content>

        <Image>
          <StytledDiv>
            <Flutuante circle={false} filter={false} />
          </StytledDiv>
          <img src={jhoel} alt="Foto do Jhoel" />

          <Flutuante circle={true} filter={true} />
        </Image>
      </Hero>
    </Section>
  );
}
