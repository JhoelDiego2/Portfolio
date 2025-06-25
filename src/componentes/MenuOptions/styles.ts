import styled from "styled-components";


export const Container= styled.div `
    display: flex;
    flex-direction: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "column-reverse" : "column")};
    width: 10vw;
    height: auto;
    position: relative;
`

export const Box= styled.div `
    width: 10vw;
    height: 200px;
    padding: 0px 20px;
    background-color:rgba(12, 220, 247, 0.12);
    border-radius: 10px;
    position: absolute;
    top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content:space-evenly;

`

export const ButtonStyled= styled.button `
    background-color: ${props => props.theme.cores.menu};
    border-radius: 10px;
    padding: 10px 20px;
    color: #0f1115;
    left: 0;
    right: 0;
    display: flex;
    width: 10vw;
    height: 40px;
    text-align: center;
    border: none;
    box-shadow: 0px 1px 10px 1px rgba(15, 17, 21, 0.56);
    cursor: pointer;
    color: ${props => props.theme.cores.letra};
    font-size: 20px;

`
export const Lista = styled.ul`
list-style: none;
font-size: 20px;
    cursor: pointer;

`

