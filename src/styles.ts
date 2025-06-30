import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.letra};
    font-family: Gill Sans, sans-serif;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    min-height: 100dvb;
    width: 100vw;
    font-size: 1.2rem;
    display: flex;
    padding-inline: clamp(1rem, 5vw, 6rem);
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1440px;
    @media (min-width: 1440px) {
      max-height: 854px;
    }
  };
  p{
    font-size: clamp(1rem, 4%, 3rem);
  }
  a{
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
     background-color: ${({ theme }) => theme.cores.menu}; 
      border-radius: 10px;
  }

`
export default EstiloGlobal