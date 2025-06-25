import type React from "react"
import { useEffect, useRef, useState } from "react"
import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { Container, Nav, Background, ToggleButton, List, ListItem, TextPlaceholder, SvgLine} from "./styles"
import { useTranslation } from "react-i18next";


const menuItems = [
  { id: "inicio", label: "nav.inicio" },
  { id: "habilidades", label: "nav.habilidades" },
  { id: "projetos", label: "nav.projetos" },
  { id: "idiomas", label: "nav.idiomas" },
  { id: "contato", label: "nav.contato" },
];
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}



const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

// Componente Path para o ícone do menu
interface PathProps {
  d?: string
  variants: Variants
  transition?: { duration: number }
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" {...props} />
)

// Componente MenuItem
interface MenuItemProps {
  i: number
}

const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const { t } = useTranslation(); 
  return (
    <ListItem variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <TextPlaceholder>{t(menuItems[i].label)}</TextPlaceholder>
    </ListItem>
  );
};

// Componente Navigation
const Navigation: React.FC = () => (
  <List variants={navVariants}>
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </List>
)

// Componente MenuToggle
interface MenuToggleProps {
  toggle: () => void
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <ToggleButton onClick={toggle}>
    <SvgLine width="23" height="23" viewBox="0 0 23 23" >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </SvgLine>
  </ToggleButton>
)

// Hook personalizado para dimensões
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
  }, [ref])

  return dimensions.current
}

// Componente principal - ESTA É A FUNÇÃO QUE VOCÊ DEVE IMPORTAR
const AnimatedSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <Container isOpen={isOpen} >
      <Nav initial={false} animate={isOpen ? "open" : "closed"}  ref={containerRef}>
        <Background variants={sidebarVariants} />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </Nav>
    </Container>
  )
}

export default AnimatedSidebar