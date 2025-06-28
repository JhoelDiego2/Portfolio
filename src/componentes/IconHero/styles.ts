import styled from "styled-components";

type NomeIcone = "github" | "linkedin" | "zap";

interface IconeProps {
  nome: NomeIcone;
}

export const Icone = styled.div<IconeProps>`
  /* background-image: url(${props => props.theme.cores[props.nome]}); */
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
