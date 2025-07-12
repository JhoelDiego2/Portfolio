import styled from "styled-components";

export const Box = styled.div`
    flex: 1 1;
    background-color: ${props => props.theme.cores.menu_suave};
    border: solid 2px black;
    padding: 27px 35px;
    padding: 20px 20px;
    min-width: 200px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 608px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
      &::before{
    content:'';
    position:absolute;
    background: ${props => props.theme.cores.menu_suave};

   

    width: 20vh;
    height: 20vh;
    right: -10vh;
    bottom: -10vh;
    border-radius: 1000px;

  }
`
export const DivStyled = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: -12%;
  transform: rotate(20deg);

`