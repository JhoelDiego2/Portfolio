import styled from "styled-components";

export const Floating_element = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 13%;
  left: 6%;
  width: 100%;
  height: 100%;
  z-index: -1;
  @media (max-width: 500px) {
    top: 12%;
    left: 1%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Inner_circulo = styled.div<FlutuanteProps>`
  width: 200px;
  height: 200px;
  background: ${props=>props.theme.cores.menu};
  filter: ${props => props.filter? 'blur(6px)':'blur(0px)'};
  border-radius: 50%;
  border-radius: ${props => props.circle? '50%':'10%'};
  width: 93%;
  height: 93%;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
