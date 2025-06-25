import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Container, Box, ButtonStyled, Lista} from "./styles"

type MenuOptionsProps = {
  mobileMenuOpen: boolean;
}
export  function MenuOPtions({mobileMenuOpen}: MenuOptionsProps) {
    const [isVisible, setIsVisible] = useState(true)

    return (

        <Container  mobileMenuOpen={mobileMenuOpen}>


            <ButtonStyled 
               as={motion.button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                Mais Opções
            </ButtonStyled >
                        <AnimatePresence initial={false}>
                {isVisible ? (
                    <Box 
                    as={motion.div}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <Lista>
                            <p>Tema</p>
                            <li>Modo Claro</li>
                            <li>Modo Obscuro</li>
                        </Lista>
                        <Lista>
                            <p>Idioma</p>
                           <li>Português</li>
                            <li>Espanhol</li>
                            <li>Inglês</li>
                        </Lista>
                    
                    </Box>
                ) : null}
            </AnimatePresence>
        </Container >
    )
}