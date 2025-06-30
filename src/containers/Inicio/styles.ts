import styled from "styled-components";
export const Section = styled.section`
  background: url(${(props) => props.theme.cores.hero});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  align-items: flex-start;
  background-size: 100%;
  span {
    display: flex;
    gap: 15px;
  }
  background-color: rgb(99, 4, 4);
  padding-top: 70px;
  min-height: auto;

`;
export const Hero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  /* min-height: 80dvh; */
  /* padding: 0vh   clamp(0.1rem, 3vw, 6rem); */
  background-color: rgb(0, 255, 21);
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  height: 100%;
  padding-top: 70px;
  gap: 30px;
`;
export const Content = styled.div`
  width: 100%;
  background-color: rgba(255, 0, 0, 0.49);
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 36%;
  }
  font-size: clamp(17px, 4%, 1.7rem);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Titulo = styled.p`
  font-size: ${(props) =>
    props.titulo ? "clamp(2rem, 4%, 4rem)" : "clamp(1.5rem, 4%, 3rem)"};
  color: ${(props) => (props.titulo ? props.theme.cores.menu : null)};
  padding-bottom: ${(props) => (props.titulo ? "2%" : "0px")};
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
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 36%;
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
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 22px 40px 10px ${(props) => props.theme.cores.menu};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 3vw;
  justify-content: center;
  background-color: rgb(0, 255, 21);
  padding-top: 3rem
`;
