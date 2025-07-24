import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  /* padding-bottom: 100px; */
  width: 100%;
  @media (min-width: 800px) {
    padding-inline: clamp(1rem, 5vw, 6rem);
  }
`;

export const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  padding: 0 5px;
  align-items: flex-end;
  gap: 15px;

  @media (min-width: 1000px) {
  flex-wrap: nowrap;
    gap: 35px;
    min-height: 440px;
  }
`;

export const Splash = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(306deg, #3d413edc 30%, #0fbab2ff 100%);
  background: linear-gradient(306deg, #3d413e28 30%, #62d2ccff 100%);
  border-radius: 20px;
    @media (min-width: 745px) {
    top: 60px;
  }
  @media (min-width: 900px) {
    top: 80px;
  }
  @media (min-width: 1000px) {
    top: 40px;
  }
  @media (min-width: 1468px) {
    top: 140px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 10;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 10px;
  /* width: 100%; */
  /* background-color: green; */
  @media (min-width: 1000px) {
    padding: 70px 20px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
    /* background-color: red; */
    width: 100%;
    justify-content: center;
    row-gap: 10px;
  }
    @media (min-width: 745px) {
    max-width: 270px;
  }
  @media (min-width: 900px) {
    max-width: 290px;
  }
    @media (min-width: 940px) {
    max-width: 300px;
  }
  @media (min-width: 1000px) {
    max-width: 400px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;

  width: 100%;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #000000ff;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: #f3f4f6;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
`;

export const ProjectImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

export const Button = styled.a`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  background-color: #0ea5e9;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0284c7;
  }

  &.secondary {
    background-color: #4b5563;

    &:hover {
      background-color: #374151;
    }
  }
`;
export const Card = styled.div`
  width: 95%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.65);
  transition: transform 0.3s ease;
  img:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
  }
  @media (max-width: 393px) {
    height: 400px;
    /* display: flex; */
  }

  background-color: black;
  @media (min-width: 371px) {
  /* width: 400px; */

  height: 460px;
}
  @media (min-width: 390px) {
  /* width: 400px; */

  height: 500px;
}
  @media (min-width: 520px) {
  /* width: 400px; */

  height: 600px;
}
  @media (min-width: 687px) {
    width: 400px;

    height: 630px;
  }
    /* @media (min-width: 767p) and (max-width: ;) {
    width: 400px;

    height:800px;
  } */
    @media (min-width: 745px) {
        width: 350px;

    height: 580px;
    }
        @media (min-width: 800px) {
        width: 340px;

    height: 580px;
    }
      @media (min-width: 900px) {
    width: 400px;

    height: 640px;;
  }
`;
export const CardMobile = styled.div`
  width: 200px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.65);

  transition: transform 0.3s ease;
  img {
    width: 200px;
  }
  img:hover {
    transform: scale(1.02);
  }
  height: 630px;
  background-color: black;
  overflow: hidden;
  display: none;
  @media (min-width: 695px) {
    display: block;
  }
  @media (min-width: 745px) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: block;
  height: auto;
  }
`;
