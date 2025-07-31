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
import { motion } from 'framer-motion'
export function Inicio() {
  return (
    <Section id="inicio">
      <Hero>
        <Gradiant />
        <Content 
        as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
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
            <IconeHero nome="github" links="https://github.com/JhoelDiego2" delay={0.5}/>
            <IconeHero
              nome="linkedin"
              links="https://www.linkedin.com/in/jhoeldiego"
              delay={1}
            />
            <IconeHero nome="zap" links="wa.link/z8gp33" delay={1.5}/>
            <IconeHero nome="email" links="mailto:jhoeldiego22@gmail.com" delay={2} />
          </IconsWrapper>
        </Content>

        <Image >
          <StytledDiv>
            <Flutuante circle={false} filter={false} />
          </StytledDiv>
          <img src={jhoel} alt="Foto do Jhoel"  />

          <Flutuante circle={true} filter={true} />
        </Image>
      </Hero>
    </Section>
  );
}
