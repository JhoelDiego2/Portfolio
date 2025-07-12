import Header from "./containers/Sidebar";
import {  useState } from "react";
import { ThemeProvider } from "styled-components";
import { light_theme, dark_theme } from "./theme";
import EstiloGlobal from "./styles";
import { Inicio } from "./containers/Inicio";
import { Skills } from "./containers/Skills";
import { Projects } from "./containers/projects";
function App() {
  const [temaClaro, setTemaClaro] = useState(true);

  return (
    <ThemeProvider theme={temaClaro ? light_theme : dark_theme}>
      <EstiloGlobal />
        <Header toggleTema={() => setTemaClaro(!temaClaro)} />
        <Inicio />
        <Skills/>
        <Projects />
    </ThemeProvider>
  );
}

export default App;
