import { Traducao } from "../../componentes/Traducao";
import { TituloSub } from "../../componentes/Titulo";
import { SkillOrbit } from "../../componentes/SkillOrbit";
import { Column2, Column1 } from "./styles";
import { BoxSkill } from "../../componentes/BoxSkill";
import { Container } from "./styles";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function Skills() {
  useEffect(() => {
    ScrollReveal().reveal(".skills-title", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      reset: true,
    });

    ScrollReveal().reveal(".skills-card", {
      delay: 250,
      distance: "20px",
      origin: "bottom",
      reset: true,
    });

    ScrollReveal().reveal(".skills-orbit", {
      delay: 300,
      distance: "20px",
      origin: "bottom",
      interval: 100,
      reset: true,
    });
  }, []);

  return (
    <section id="habilidades">
      <TituloSub titulo={true} justify="center" className="skills-title">
        <Traducao tKey="nav.habilidades" />
      </TituloSub>
      <Container>
        <Column1>
          <SkillOrbit />
        </Column1>
        <Column2>
          <BoxSkill
            // className={"skills-card"}
            numero={1}
            titulo={"Habilidades.titulo1"}
            texto={"Habilidades.descricao1"}
          />
          <BoxSkill
            // className={"skills-card"}

            numero={2}
            titulo={"Habilidades.titulo2"}
            texto={"Habilidades.descricao2"}
          />
          <BoxSkill
            // className={"skills-card"}

            numero={3}
            titulo={"Habilidades.titulo3"}
            texto={"Habilidades.descricao3"}
          />
        </Column2>
      </Container>
    </section>
  );
}
