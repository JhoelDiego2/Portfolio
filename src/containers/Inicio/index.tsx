import { Traducao } from "../../componentes/Traducao";
import { Titulo, Hero, Image, Content, IconsWrapper, Section } from "./styles";
import { IconeHero } from "../../componentes/IconHero";
import jhoel from "../../assets/img/jhoel_sem_fundo.png";
import { Typewriter } from "../../componentes/Typewriter";
export function Inicio() {
  return (
    <Section>
      <Hero>
        <Content>
          <span>
            <Titulo titulo={false}>
              <Traducao tKey="hero.linha1" />
            </Titulo>
            <Titulo titulo={false}>
              <Traducao tKey="hero.linha2" />
            </Titulo>
          </span>
          <Titulo titulo={true}>
            <Typewriter text="hero.linha3"/> 
          </Titulo>
          <p>
            <Traducao tKey="hero.linha4" />
          </p>
          <IconsWrapper>
            <IconeHero nome="github" links="https://github.com/JhoelDiego2"/>
            <IconeHero nome="linkedin"links="https://www.linkedin.com/in/jhoeldiego" />
            <IconeHero nome="zap" links="wa.link/z8gp33"/>
            <IconeHero nome="github" links="https://github.com/JhoelDiego2"/>
          </IconsWrapper>
        </Content>

        <Image>
          <img src={jhoel} alt="Foto do Jhoel" />
        </Image>
      </Hero>
    </Section>
  );
}
