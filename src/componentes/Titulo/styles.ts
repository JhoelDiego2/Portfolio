import styled from "styled-components"

export const StyledTitulo = styled.p<TIuloProps>`
width: 100%;
    font-size: ${(props) =>
    props.titulo ? "clamp(2rem, 4%, 4rem)" : "clamp(1.5rem, 4%, 3rem)"};
  color: ${(props) => (props.titulo ? props.theme.cores.menu : props.theme.cores.letra)};
  padding-bottom: ${(props) => (props.titulo ? "2%" : "0px")};
  display: flex;
  align-items: flex-end;
  @media (min-width: 1440px) {
    font-size: ${(props) =>
      props.titulo ? "clamp(4rem, 6%, 5rem)" : "clamp(3rem, 5%, 3rem)"};
  }
  span{
    margin-bottom: 1.4%;
  }
  justify-content: ${(props) => (props.justify)};;
`