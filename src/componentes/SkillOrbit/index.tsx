import { motion } from "framer-motion";
import pythonIcon from "../../assets/img/py.png";
import figmaIcon from "../../assets/img/fg.png";
import tsIcon from "../../assets/img/ts.png";
import jsIcon from "../../assets/img/js.png";
import nodeIcon from "../../assets/img/nd.png";
import reactIcon from "../../assets/img/rc.png";
import taiwand from "../../assets/img/tw.png";
import photo from "../../assets/img/photo.png";
import java from "../../assets/img/java.png";
import git from "../../assets/img/git.png";
import css from "../../assets/img/css.png";
import { OrbitContainer, Central, Circle, OrbitItem } from "./styles";

const icons_first = [
  figmaIcon,
  photo,
  git,
  taiwand,
  reactIcon,
  css,
];
const icons_second = [,nodeIcon,, pythonIcon];
const icons_third = [java, tsIcon];
interface ElementsProps {
  lista: string[];
  tamanho: number;
}

const Elements = ({lista, tamanho}: ElementsProps) => (
  <>
    {lista.map((icon, index) => {
      let largura = lista === icons_second? 4: lista.length
      const angle = (360 / (largura) ) * index;
      return (
        <OrbitItem key={index} angle={angle} tamanho={tamanho}>
          <img src={icon} alt={`icon-${index}`} />
        </OrbitItem>
      );
    })}
  </>
);
export function SkillOrbit() {
  return (
    <OrbitContainer>
      <Central src={jsIcon} />
      <Circle >
        <Elements lista={icons_first} tamanho={490}/>
      </Circle>
      <Circle >
        <Elements lista={icons_second} tamanho={260}/>
      </Circle>
      <Circle >
        <Elements lista={icons_third} tamanho={120}/>
      </Circle>
    </OrbitContainer>
  );
}
