import { Traducao } from "../../componentes/Traducao";
import { TituloSub } from "../../componentes/Titulo";
import { SkillOrbit } from "../../componentes/SkillOrbit";
import { Column2, Column1 } from "./styles";
import { BoxSkill } from "../../componentes/BoxSkill";
import { Container } from "./styles";
export function Skills() {
  return (
    <section id="habilidades" >
      <TituloSub titulo={true} justify="center">
        <Traducao tKey="nav.habilidades" />
      </TituloSub>
      <Container>
        <Column1>
          <SkillOrbit />
        </Column1>
        <Column2>
          <BoxSkill
            numero={1}
            titulo={"Habilidades.titulo1"}
            texto={"Habilidades.descricao1"}
          />
          <BoxSkill
            numero={2}
            titulo={"Habilidades.titulo2"}
            texto={"Habilidades.descricao2"}
          />
          <BoxSkill
            numero={3}
            titulo={"Habilidades.titulo3"}
            texto={"Habilidades.descricao3"}
          />
        </Column2>
      </Container>
    </section>
  );
}
