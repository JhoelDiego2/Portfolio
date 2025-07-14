import styled from "styled-components";
export const Container = styled.div`
  padding-top: 3rem;
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
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
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
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
export const Column1 = styled.div`
  width: 100%;
  max-width: 640px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
