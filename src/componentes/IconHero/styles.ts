import styled from "styled-components";

type NomeIcone = "github" | "linkedin" | "zap";

interface IconeProps {
  nome: NomeIcone;
}
const getIconeURL = (nome: NomeIcone, theme: any) => {
  return theme.cores[nome] || "";
};

export const Icone = styled.div<IconeProps>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 3.5rem;
  height: auto;
  border-radius: 1000px;
  backdrop-filter: blur(5px);
  @media (min-width: 768px) {
    width: 4rem;
  }
  @media (min-width: 1024px) {
    width: 94px;
  }
  &:hover {
    background: ${(props) => props.theme.cores.menu};
    transform: scale(1.1);
    backdrop-filter: blur(220px);
    opacity: 0.9;
  }
`;
