import styled from 'styled-components'

export const DivPai = styled.div`
    background-color: ${props => props.theme.cores.fundo};
    width: 27px;
    height: 27px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    cursor: pointer;
    display: none;
        @media screen and (max-width: 700px) {
  display: flex;
`
export const Linha = styled.div`
    background-color: ${props => props.theme.cores.letra};
    width: 100%;
    height: 2px;
`
export const Menu = styled.div`
display: none;
`
export const Lista = styled.ul`
`
export const Link = styled.li`
`
