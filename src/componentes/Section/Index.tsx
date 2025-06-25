import { motion } from "framer-motion";
import {
    SectionStyle
} from './styles';
export function Section({ children }: { children: React.ReactNode }) {
  return (
    <SectionStyle
      as={motion.section}
      initial={{ opacity: 0,}}
      whileInView={{ opacity: 1,}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </SectionStyle>
  );
}