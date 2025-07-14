import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Nav,
  Background,
  ToggleButton,
  List,
  ListItem,
  TextPlaceholder,
  SvgLine,
} from "./styles";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

const menuItems = [
  { id: "inicio", label: "nav.inicio" },
  { id: "habilidades", label: "nav.habilidades" },
  { id: "projetos", label: "nav.projetos" },
  { id: "idiomas", label: "nav.idiomas" },
  { id: "contato", label: "nav.contato" },
];

const navVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 35px) 35px)",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}
const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuItemProps {
  i: number;
  onNavClick: (sectionId: string) => void;
  closeMenu: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ i, onNavClick, closeMenu }) => {
  const { t } = useTranslation();
  const item = menuItems[i];

  return (
    <ListItem
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      role="link"
      tabIndex={0}
      onClick={() => {
        onNavClick(item.id);
        closeMenu();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onNavClick(item.id);
          closeMenu();
        }
      }}
    >
      <TextPlaceholder>{t(item.label)}</TextPlaceholder>
    </ListItem>
  );
};

interface NavigationProps {
  onNavClick: (sectionId: string) => void;
  closeMenu: () => void;
}
const Navigation: React.FC<NavigationProps> = ({ onNavClick, closeMenu }) => (
  <List variants={navVariants}>
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} onNavClick={onNavClick} closeMenu={closeMenu} />
    ))}
  </List>
);

interface MenuToggleProps {
  toggle: () => void;
}
const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <ToggleButton
    onClick={toggle}
    tabIndex={0}
    role="button"
    aria-label="Alternar menu"
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") toggle();
    }}
  >
    <SvgLine width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
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
);

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);
  return dimensions.current;
};

interface AnimatedSidebarProps {
  onNavClick: (sectionId: string) => void;
}
const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  return (
    <Container isOpen={isOpen}>
      <Nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={dimensions.height}
        ref={containerRef}
      >
        <Background variants={sidebarVariants} />
        <Navigation
          onNavClick={onNavClick}
          closeMenu={() => setIsOpen(false)}
        />
        <MenuToggle toggle={() => setIsOpen((prev) => !prev)} />
      </Nav>
    </Container>
  );
};

export default AnimatedSidebar;
