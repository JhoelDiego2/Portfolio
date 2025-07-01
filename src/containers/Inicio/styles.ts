import styled from "styled-components";
export const Section = styled.section`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  align-items: flex-start;
  background-size: 100%;
  span {
    display: flex;
    gap: 15px;
  }
  padding-top: 70px;
  min-height: auto;
`;
export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;
  padding-top: 70px;
  gap: 30px;
  @media (min-width: 1020px) {
    flex-direction: row;
    width: 100%;
    padding-inline: clamp(0.1rem, 3vw, 6rem);
  }
  @media (min-width: 1025px) {
    font-size: clamp(2rem, 5%, 3rem);
    padding-top: 11%;
  }
`;
export const Content = styled.div`
  width: 100%;
  font-size: clamp(17px, 4%, 1.7rem);
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 431px) {
    width: 90%;
    /* padding: 0vh  clamp(0.1rem, 3vw, 6rem); */
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1025px) {
    padding-bottom: 5%;
  }
`;
export const Titulo = styled.p`
  font-size: ${(props) =>
    props.titulo ? "clamp(2rem, 4%, 4rem)" : "clamp(1.5rem, 4%, 3rem)"};
  color: ${(props) => (props.titulo ? props.theme.cores.menu : null)};
  padding-bottom: ${(props) => (props.titulo ? "2%" : "0px")};
  @media (min-width: 1440px) {
    font-size: ${(props) =>
      props.titulo ? "clamp(4rem, 6%, 5rem)" : "clamp(3rem, 5%, 3rem)"};
  }
`;
export const Image = styled.div`
  background: url(${(props) => props.theme.cores.sptech});
  background-size: 110%;
  background-position: center;
  border-radius: 1000px;
  aspect-ratio: 1 / 1;
  width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
  position: relative;
  align-self: flex-end;
  @media (min-width: 431px) {
    width: 70%;
  }
  @media (min-width: 650px) {
    width: 60%;
  }
  @media (min-width: 800px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
  img {
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 1000px;
    width: 120%;
    height: auto;
    display: block;
    margin: 0 auto;
    bottom: 0.5%;
    right: -10%;
  }
  @media (min-width: 1440px) {
    width: 42%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 3%;
  justify-content: center;
  padding-top: 10%;
`;
