import { motion } from "framer-motion";
import {
  NavStyled,
  UlStyled,
  LiStyled, 
  Circle, 
} from './styles'; // use nomes que indicam que são componentes
import MenuHamburguer from "../MenuHamburguer";

const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

type NavBarProps = {
  children?: React.ReactNode;
  $isScrolled: boolean;
  mobileMenuOpen: boolean;
   setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

};

export default function NavBar({ children, $isScrolled, mobileMenuOpen, setMobileMenuOpen}: NavBarProps) {
  return (
    <NavStyled
      as={motion.nav}
      initial="hidden"
      animate="visible"
      variants={listVariants}
      $isScrolled={$isScrolled}
    >
      <motion.p initial="hidden" animate="visible" variants={itemVariants}>
        Jhoel
        <Circle as={motion.span} initial="hidden" animate="visible" variants={itemVariants}>
        </Circle>
      </motion.p>

      <UlStyled as={motion.ul}>
        {["Inicio", "Habilidades", "Projetos", 'Idiomas', "Contato"].map((item) => (
          <LiStyled as={motion.li} key={item} variants={itemVariants} mobileMenuOpen={mobileMenuOpen}>
            {item}
          </LiStyled>
        ))}
        {children} {}
      </UlStyled>
        <MenuHamburguer 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}  
        />

    </NavStyled>
  );
}