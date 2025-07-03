import { StyledTitulo } from "./styles";
interface TituloProps{
    titulo: boolean;
    children?: React.ReactNode;
}
export function TituloSub({titulo, children}: TituloProps) {
    return <StyledTitulo titulo={titulo}>
        {children}
    </StyledTitulo>
}