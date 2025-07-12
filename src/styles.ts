import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  html{
    width: 100vw;
    overflow-x: hidden;
  }
  body {
    /* width: 100vw; */
      @media (min-width: 1025px) {
        background: url(${(props) => props.theme.cores.hero});
        background-repeat: no-repeat;
    background-size: 2000px 900px;
    background-position: center 60px;
    background-color: ${({ theme }) => theme.cores.fundo};

      }
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.letra};
    font-family: Gill Sans, sans-serif;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
      height: 100%;
  }
  * {
    transition: 0.3s ease-in-out;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }
  *::selection{
    background-color: ${({ theme }) => theme.cores.letra};
    color: ${({ theme }) => theme.cores.fundo};
  }

  section{
    /* border: solid 1px red; */
    /* min-height: 100dvb; */
    width: 100vw;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    padding-inline: clamp(1rem, 5vw, 6rem);
    position: relative;
    /* flex-wrap: wrap; */
    justify-content: center;
    max-width: 1440px;
  @media (min-width: 1024px) {
    padding-inline: 0vw;
    max-width: 1024px;
  }
    @media (min-width: 1440px) {
    min-height: 920px;
    /* max-height: 854px; */
    max-width: 1440px;
    width: 1440px;
justify-content: flex-start;
    }
  };
  p{
    font-size: clamp(1rem, 4%, 3rem);
    font-size: 16px;
  }

  a{
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
     background-color: ${({ theme }) => theme.cores.menu}; 
      border-radius: 10px;
  }
`;
export default EstiloGlobal;
