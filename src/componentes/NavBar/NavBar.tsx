import React from "react";
import { motion } from "framer-motion";
import styles from "./NavBar.module.css";

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

export default function NavBar() {
  return (
    <motion.nav
      className={styles.nav}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <motion.p initial="hidden" animate="visible" variants={itemVariants}>
        Jhoel.
      </motion.p>

      <motion.ul>
        {["Inicio", "Sobre", "Projetos", "Contato"].map((item) => (
          <motion.li key={item} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
