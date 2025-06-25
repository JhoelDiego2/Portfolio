import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.letra};
    font-family: Gill Sans, sans-serif;

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
`

export default EstiloGlobal;

export const Container = styled.div`
  @media (max-width: 768px) {
    max-width: 96%;
  }
`;