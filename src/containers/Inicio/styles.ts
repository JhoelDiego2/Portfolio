import styled from "styled-components";
export const Section = styled.section`
  align-items: flex-start;
  span {
    display: flex;
    gap: 15px;
  }
  padding-top: 70px;
  
  min-height: auto;
    justify-content: center;
  

  @media (max-width: 1024px) {
    background: url(${(props) => props.theme.cores.hero});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 100dvh;

  }
   @media (min-width: 1000px) {
    padding-top: 0;
    min-height: auto;
   }
      @media (min-width: 1437px) {
    padding-top: 0;
    min-height: auto;
    min-height: 920px;
   }
`;
export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;
  gap: 30px;
  @media (min-width: 1020px) {
    flex-direction: row;
    width: 100%;
    padding-inline: clamp(0.1rem, 3vw, 6rem);
  }
  @media (min-width: 1025px) {
    font-size: clamp(2rem, 5%, 3rem);
    padding-top: 14%;
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
  box-shadow: 7px 5px 10px 2px rgba(0, 0, 0, 0.2);
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 3%;
  justify-content: center;
  padding-top: 10%;
`;
export const Gradiant = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  background: radial-gradient(
    circle,
    #9bffa5 29%,
    #aed3ff 47%,
    #c9d4ef 55%,
    #d798e1 66%,
    #cacffa 82%
  );
  filter: blur(200px);
  z-index: -1;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StytledDiv = styled.div`
  width: 15%;
  height: 15%;
  position: absolute;
  top: -5%;
  left: -5%;
  transform: rotate(20deg);
`;
