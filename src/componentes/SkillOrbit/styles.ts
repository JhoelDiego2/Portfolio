import styled from "styled-components";

export const OrbitContainer = styled.div`
  position: relative;
  width: 86%;
  height: 90%;
  border-radius: 1000px;
  border: solid 1px ${(props) => props.theme.cores.letra};
  &::before {
    content: "";
    display: block;
    width: 67%;
    aspect-ratio: 1/1;
    border: solid 1px ${(props) => props.theme.cores.menu};
    border-radius: 1000px;
    position: absolute;
    top: 19%;
    left: 19%;
    transform: translate(-1%, -1%);
    margin: 0 auto;
  }
  animation: orbita 110s linear infinite;

  @keyframes orbita {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Central = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 18%;
  height: auto;
  border-radius: 50%;
`;

export const Circle = styled.div`
  border: solid 1px ${(props) => props.theme.cores.letra};
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  /* left: 50%; */
  width: 38%;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  border-radius: 1000px;
`;

export const OrbitItem = styled.div<{ angle: number; tamanho: number }>`
  width: 50%;
  height: auto;
  /* background-color: black; */
  border-radius: 1000px;
  position: absolute;
  top: 32%;
  left: 32%;
  transform: rotate(${(props) => props.angle}deg)
    translate(${(props) => props.tamanho}%)
    rotate(-${(props) => props.angle}deg);
   

    img {
      width: 100%;
      animation: noSpin 100s linear infinite;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }
  @keyframes noSpin {
    100% {
      transform: rotate(360deg);
    }
  }
  /* animation: orbita 3s alternate-reverse ; */

  @keyframes orbita {
    100% {
      transform: rotate(-360deg);
    }
  }
  &:hover {
    transform: rotate(${(props) => props.angle}deg)
      translate(${(props) => props.tamanho}%)
      rotate(-${(props) => props.angle}deg) scale(1.2);
  }
`;
