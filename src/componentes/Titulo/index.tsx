import { StyledTitulo } from "./styles";
interface TituloProps {
  titulo: boolean;
  children?: React.ReactNode;
  justify: string;
  className?: string;
}
export function TituloSub({ titulo, children, justify, className }: TituloProps) {
  return (
    <StyledTitulo titulo={titulo} justify={justify} className={className}>
      {children}
    </StyledTitulo>
  );
}
