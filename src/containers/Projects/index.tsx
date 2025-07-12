import { Traducao } from "../../componentes/Traducao"
import { TituloSub } from "../../componentes/Titulo"
import ScrollTriggered from "../../componentes/BoxProject"
export function Projects() {
    return(
        <>
            <section id="projetos">
                <TituloSub titulo={false} justify="center">
                    <Traducao tKey="nav.projetos" />
                </TituloSub>
                <ScrollTriggered />
            </section>
        </>
    )
}