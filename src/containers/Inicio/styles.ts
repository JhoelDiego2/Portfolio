import styled from "styled-components"
import FotoJhoel from "../../assets/img/jhoel.png"
export const Section= styled.section`
    background:url(${props => props.theme.cores.hero});
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: space-between;
`
export const Hero= styled.div`
    width: 40vw;
`
export const Titulo= styled.p`
`
export const Image= styled.div`
    background:url(${FotoJhoel});
    width: 450px;
    height: 480px;
    background-position: center;
    background-size: cover;
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;
