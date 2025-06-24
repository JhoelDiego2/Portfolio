import styled from "styled-components";

interface MenuProps {
  mobileMenuOpen: boolean;
}

export const DivPai = styled.div<MenuProps>`
  background-color: none;
  width: 27px;
  height: 27px;
  display: flex;
  flex-direction: column;
  gap: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "0" : "8px")};
  justify-content: center;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
  }
  z-index: 2;
  position: fixed;
  right: 10px;
  align-items: center;


`;
export const Linha = styled.div<MenuProps>`
  background-color: ${(props) => props.theme.cores.letra};
  width: 100%;
  height: 2px;
  margin: 0 auto;
    &:nth-child(2) {
    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "none" : "block")};
  }
  &:nth-child(1) {
    transform: ${({ mobileMenuOpen }) =>
      mobileMenuOpen ? "rotate(-45deg)" : "rotate(0deg)"};
  }

  &:nth-child(3) {
    transform: ${({ mobileMenuOpen }) =>
      mobileMenuOpen ? "rotate(45deg)" : "rotate(0deg)"};
  }
`;
export const Menu = styled.div<MenuProps>`
  background-color: ${(props) => props.theme.cores.menu};
  position: fixed;
  top: 0;
  right: 0;
  width: 180px;
  height: 100vh;
  opacity: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "1" : "0")};
  opacity: 1;
  transform: ${({ mobileMenuOpen }) =>
    mobileMenuOpen ? "translateX(0%)" : "translateX(100%)"};
`;
export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: flex-start;
  padding-left: 20px;
  gap: 40px;
  justify-content: center;
`;
export const Link = styled.li`
      cursor: pointer;
  font-size: 1rem;
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
`;
