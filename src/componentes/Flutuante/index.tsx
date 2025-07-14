import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

import { Floating_element, Inner_circulo } from "./styles";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
interface FlutuanteProps {
  circle: boolean;
  filter: boolean;
}

function Content({ circle, filter }: FlutuanteProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <div ref={ref}></div>
      <Floating_element
        as={motion.div}
        className="floating-element"
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y, rotate }}
      >
        <Inner_circulo circle={circle} filter={filter} />
      </Floating_element>
    </>
  );
}

export function Flutuante({ circle, filter }: FlutuanteProps) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Content circle={circle} filter={filter} />
    </>
  );
}
