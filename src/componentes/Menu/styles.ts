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
  left: 0;
  height: ${({ isOpen }) => (isOpen ? "100%" : "80px")};
  backdrop-filter:  ${({ isOpen }) => (isOpen ? "blur(10px)" : "blur(0px)")};
  border-radius:  30px;
  
`

export const Nav = styled(motion.nav)`
  width: 300px;
  height: 100vh;
  
`

export const Background = styled(motion.div)`
background: ${props => props.theme.cores.menu};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`

export const ToggleButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
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
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
`

export const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
  cursor: pointer;
  
`


export const TextPlaceholder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
  
`
export const SvgLine = styled.svg`
    color: white;
`