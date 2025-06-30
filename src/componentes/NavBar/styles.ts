import styled from 'styled-components'

export const NavStyled = styled.nav<NavStyleProps>`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height:70px;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-evenly;
  backdrop-filter: blur(10px);
  color:  ${props => props.theme.cores.letra};
  box-shadow: ${({$isScrolled}) => ($isScrolled? '1px 1px 10px 1px rgba(0, 0, 0, 0.493);' : 'none')};
  backdrop-filter: ${({$isScrolled}) => ($isScrolled? 'blur(8px)' : 'none')};
  z-index: 20;
  background-color: black;
  p{
    font-size: 2rem;
  }
`

export const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 3vw;
  margin: 0;
  padding: 0;
  align-items: center;
`

export const LiStyled = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  &:after{
      content: '';
      display: block;
      width:10%;
      height: 3px;
      border-radius: 10px;
      background-color: ${props => props.theme.cores.primario};
      transition: 0.5s ease-in-out;
      opacity: 0;
  };
    &:hover::after {
    width: 100%;
    opacity: 1;

    }
    @media screen and (max-width: 995px) {
  display: none;
}
`
export const Circle = styled.span`
    color: white;
    border-radius: 100px;
    background-color: ${props => props.theme.cores.menu};
    width: 7px;
    height: 7px;
    display: inline-block
`