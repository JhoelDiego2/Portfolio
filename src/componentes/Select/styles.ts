import styled from "styled-components"
export const Select = styled.select`
    background-color:${props => props.theme.cores.fundo};
    border: none;
    font-size: 1.5rem;
    letter-spacing: 3px ;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.cores.letra};
`