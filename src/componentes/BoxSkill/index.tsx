import { Traducao } from "../../componentes/Traducao";
import { TituloSub } from "../../componentes/Titulo";
import { Box, DivStyled } from "./styles";
import { Flutuante } from "../Flutuante";
interface BoxSkillProps{
    numero: number;
    titulo: string;
    texto: string;
}
export function BoxSkill({numero, titulo, texto}: BoxSkillProps) {
    return(
        <>
             <Box>
                    <DivStyled>
                           <Flutuante circle={true} filter={true}/>
                    </DivStyled>
                    <h4>{numero}
                    </h4>
                    <TituloSub titulo={false} justify="flex-start">
                        <Traducao tKey={titulo}/>
                    </TituloSub>
                    <p>
                        <Traducao tKey={texto} />
                    </p>
             </Box>
        </>
    )
}