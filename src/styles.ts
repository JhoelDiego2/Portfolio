import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corDeFundo: '#000000',
  corDeFundo1: '#000035',
  corDeFundo3: 'rgb(0, 25, 60, 0.30)',
  corPrimaria: ' #f67828',
  corSecundaria: '#FFFFFF',
  corDeFundo2: '#003366',
  corTercearia: '#335b84'
}

const EstiloGlobal = createGlobalStyle`
body{
  background-color: ${cores.corDeFundo};
  font-family: Gill Sans, sans-serif;
  @media (max-width: 768px) {
  padding-top:16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
