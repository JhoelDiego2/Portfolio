import { StyledTitulo } from "./styles";
interface TituloProps {
  titulo: boolean;
  children?: React.ReactNode;
  justify: string;
}
export function TituloSub({ titulo, children, justify }: TituloProps) {
  return (
    <StyledTitulo titulo={titulo} justify={justify}>
      {children}
    </StyledTitulo>
  );
}
