import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.letra};
    font-family: Gill Sans, sans-serif;
    overflow-x: hidden;
    @media (max-width: 768px) {
      padding-top: 16px;
    }
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
    color: ${({ theme }) => theme.cores.fundo};}

  section{
    min-height: 100dvb;
    width: 100vw;
    font-size: 1.2rem;
    display: flex;
    padding-inline: clamp(1rem, 5vw, 6rem);
    position: relative;
    flex-wrap: wrap;
  }
`
export default EstiloGlobal