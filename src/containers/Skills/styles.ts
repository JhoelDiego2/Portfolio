import styled from "styled-components"
export const Container = styled.div`
padding-top: 4vw;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;
  gap: 30px;
  @media (min-width: 1020px) {
    flex-direction: row;
    width: 100%;
    padding-inline: clamp(0.1rem, 3vw, 6rem);
  }
  @media (min-width: 1025px) {
    font-size: clamp(2rem, 5%, 3rem);
  }

`;

export const Column2 = styled.div`
width: 100%;
max-width: 608px;
  display: flex;
  flex-direction: column;
  gap: 20px;
    justify-content: center;
    align-items: center;
`
export const Column1 = styled.div`
width: 100%;
height: 100%;
max-width: 600px;
max-height: 680px;
display: flex;
justify-content: center;
    background-color: blue;

`
