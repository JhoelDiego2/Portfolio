import styled from "styled-components"
import * as motion from "motion/react-client"

interface ContainerProps {
  isOpen: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
  width: ${({ isOpen }) => (isOpen ? "100%" : "80px")};
  max-width: 100%;
  background-color:   ${({ isOpen }) => (isOpen ? " rgba(0, 0, 0, 0.19);%" : "none")};            
  overflow: hidden;
  top: 0;
  right: 0;
  height: ${({ isOpen }) => (isOpen ? "100%" : "80px")};
  backdrop-filter:  ${({ isOpen }) => (isOpen ? "blur(10px)" : "blur(0px)")};
  display: none;
    @media screen and (max-width: 700px) {
    display: flex;

  }
`

export const Nav = styled(motion.nav)`
  width: 300px;
  height: 100vh;
  
`

export const Background = styled(motion.div)`
background: ${props => props.theme.cores.menu};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 190px;
  border-radius:  10px;
`

export const ToggleButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  color: white;
`

export const List = styled(motion.ul)`
  list-style: none;
  padding: 25px;
  margin: 0;
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
`

export const ListItem = styled(motion.li)`
  width: auto;
  list-style: none;
  cursor: pointer;
  font-size: 1.4rem;
`


export const TextPlaceholder = styled.div`
  border-radius: 5px;
  height: 20px;
  flex: 1;
  
`
export const SvgLine = styled.svg`
    color: white;
`