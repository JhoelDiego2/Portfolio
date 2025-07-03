import styled from "styled-components";

export const OrbitContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 1000px;
  border: solid 1px ${props=> props.theme.cores.letra};
   &::before{
    content: '';
    display: block;
    width: 53%;
    height: 53%;
    border: solid 1px ${props=> props.theme.cores.menu};
    border-radius: 1000px;
    position: absolute;
    top: 23%;
    left: 23%;
   }
     animation: orbita 30s linear infinite;

  @keyframes orbita {
    100% {
      transform: rotate(360deg) 
    }
  }
`;

export const Central = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
    width: 12%;
    height: auto;
  border-radius: 50%;
`;

export const Circle = styled.div`
border: solid 1px  ${props=> props.theme.cores.letra};
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  /* left: 50%; */
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  border-radius: 1000px;

`;

export const OrbitItem = styled.div<{ angle: number, tamanho: number }>`
    width: 45%;
    height: auto;
/* background-color: black; */
border-radius: 1000px;
  position: absolute;
  top: 32%;
  left: 32%;
  transform: 
    rotate(${props => props.angle}deg) 
    translate(${props => props.tamanho}%)
    rotate(-${props => props.angle}deg);
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    animation: noSpin 30s linear infinite;
  }
  @keyframes noSpin {
  100% {
    transform: rotate(360deg);
  };
}
     /* animation: orbita 3s alternate-reverse ; */

  @keyframes orbita {
    100% {
      transform: rotate(-360deg) 
    }
  }
`;
