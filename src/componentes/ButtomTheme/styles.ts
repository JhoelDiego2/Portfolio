import styled from 'styled-components'

export const DivStyle = styled.div`
    border: solid 1px  ${props => props.theme.cores.letra};
    padding: 1px 5px;
    cursor: pointer;
    transform: scale(0.7);
    height: ;
    &:hover{
        background-color:  ${props => props.theme.cores.letra};
        color:  ${props => props.theme.cores.fundo};
    }
`