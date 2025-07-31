import { Traducao } from "../../componentes/Traducao";
import { TituloSub } from "../../componentes/Titulo";
import ScrollTriggered from "../../componentes/BoxProject";
import { useEffect } from "react";
import shadow from "../../assets/img/shadow.png";
import lofhel from "../../assets/img/lofhel.png";
import portafolio from "../../assets/img/portafolio.png";
import sptech from "../../assets/img/sptech.png";
import gemini from "../../assets/img/gemini.png";
import ponny from "../../assets/img/ponny.png";
import mita from "../../assets/img/mita.png";
import shadow_mobile from "../../assets/img/shadow_mobile.png";
import lofhel_mobile from "../../assets/img/lofhel_mobile.png";
import portafolio_mobile from "../../assets/img/portafolio_mobile.png";
import sptech_mobile from "../../assets/img/sptech_mobile.png";
import gemini_mobile from "../../assets/img/gemini_mobile.png";
import ponny_mobile from "../../assets/img/ponny_mobile.png";
import mita_mobile from "../../assets/img/mita_mobile.png";
import ScrollReveal from 'scrollreveal'
export function Projects() {
    useEffect(() => {
    ScrollReveal().reveal(".project-title", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      reset: true,
    });

    ScrollReveal().reveal(".project-container-left", {
      delay: 250,
      distance: "50px",
      origin: "left",
      reset: true,
    });

        ScrollReveal().reveal(".project-container-right", {
      delay: 250,
      distance: "50px",
      origin: "right",
      reset: true,
    });

  }, []);
  return (
    <>
      <section id="projetos">
        <TituloSub titulo={true} justify="center" className="project-title">
          <Traducao tKey="nav.projetos" />
        </TituloSub>
        <ScrollTriggered
        clasName="project-container-left"
          photo={shadow}
          photo_mobile={shadow_mobile}
          projectName="Shadow Slave"
          description="ProjetoShadow.descricao"
          url="https://shadow-slave-projeto.vercel.app/"
          repository="https://github.com/JhoelDiego2/Shadow-Slave-Projeto.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Node", "MySql", "Chart.js"]}
        />
        <ScrollTriggered
        clasName="project-container-right"
          photo={lofhel}
          photo_mobile={lofhel_mobile}
          projectName="Lofhel"
          description="ProjetoLofhel.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={[
            "Javascript",
            "Css",
            "Node",
            "MySql",
            "Arduino",
            "IoT",
            "Chart.js",
          ]}
        />
        <ScrollTriggered
        clasName="project-container-left"
          photo={portafolio}
          photo_mobile={portafolio_mobile}
          projectName="Portfólio"
          description="ProjetoPortfolio.descricao"
          url="https://portfolio-eight-olive-78.vercel.app/"
          repository="https://github.com/JhoelDiego2/Portfolio.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={[
            "React",
            "Typescript",
            "Styled-Components",
          ]}
        />
        <ScrollTriggered
        clasName="project-container-right"

          photo={sptech}
          photo_mobile={sptech_mobile}
          projectName="Calculadora sptech"
          description="ProjetoCalculadora.descricao"
          url="https://calculadora-diferentes-bases.vercel.app/"
          repository="https://github.com/JhoelDiego2/Calculadora-diferentes-bases.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Html"]}
        />
        <ScrollTriggered
        clasName="project-container-left"

          photo={gemini}
          photo_mobile={gemini_mobile}
          projectName="Chat Gemini"
          description="ProjetoChat.descricao"
          url="https://gemini-ia-chat.vercel.app/"
          repository="https://github.com/JhoelDiego2/Gemini-IA-Chat.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Node", "Gemini API"]}
        />
        <ScrollTriggered
        clasName="project-container-right"

          photo={mita}
          photo_mobile={mita_mobile}
          projectName="Mita Control"
          description="ProjetoSistemaVenda.descricao"
          url="https://github.com/JhoelDiego2/Mita_Control.git"
          repository="https://github.com/JhoelDiego2/Mita_Control.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Python", "MySql", "CRUD", "Tkinter"]}
        />
        <ScrollTriggered
        clasName="project-container-left"

          photo={ponny}
          photo_mobile={ponny_mobile}
          projectName="My litle Ponny"
          description="ProjetoPonny.descricao"
          url="https://extreme-go-horse-sepia.vercel.app/"
          repository="https://github.com/JhoelDiego2/ExtremeGoHorse.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Html", "DOM", "Pair Programing"]}

        />
      </section>
    </>
  );
}
