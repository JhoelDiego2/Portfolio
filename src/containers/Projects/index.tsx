import { Traducao } from "../../componentes/Traducao";
import { TituloSub } from "../../componentes/Titulo";
import ScrollTriggered from "../../componentes/BoxProject";
import shadow from "../../assets/img/shadow.png";
import lofhel from "../../assets/img/lofhel.png";
import portafolio from  "../../assets/img/portafolio.png";
export function Projects() {
  return (
    <>
      <section id="projetos">
        <TituloSub titulo={true} justify="center">
          <Traducao tKey="nav.projetos" />
        </TituloSub>
        <ScrollTriggered
          photo={shadow}
          projectName="Shadow Slave"
          description="ProjetoShadow.descricao"
          url="https://shadow-slave-projeto.vercel.app/"
          repository="https://github.com/JhoelDiego2/Shadow-Slave-Projeto.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Node", "MySql", "Chart.js"]}
        />
        <ScrollTriggered
          photo={lofhel}
          projectName="Lofhel"
          description="ProjetoLofhel.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Node", "MySql", "Arduino", "IoT", "Chart.js"]}
        />
        <ScrollTriggered
          photo={portafolio}
          projectName="Portafolio"
          description="ProjetoPortfolio.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["React", "Typescript", "Styled-Components", "responsividade", "SEO"]}
        />
                <ScrollTriggered
          photo={portafolio}
          projectName="Calculadora sptech"
          description="ProjetoCalculadora.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Html", "DOM"]}
        />
                        <ScrollTriggered
          photo={portafolio}
          projectName="Chat Gemini"
          description="ProjetoChat.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Javascript", "Css", "Node","Gemini API"]}
        />
                                <ScrollTriggered
          photo={portafolio}
          projectName="Mita Secure"
          description="ProjetoSistemaVenda.descricao"
          url="https://lofhel.vercel.app/"
          repository="https://github.com/JhoelDiego2/LOFHEL.git"
          // album="https://drive.google.com/drive/shadow-slave"
          tags={["Python", "MySql", "CRUD", "Tkinter"]}
        />
      </section>
    </>
  );
}
