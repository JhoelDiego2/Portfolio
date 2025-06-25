import Header from "./containers/Sidebar";
import {  useState } from "react";
import { ThemeProvider } from "styled-components";
import { light_theme, dark_theme } from "./theme";
import EstiloGlobal, { Container } from "./styles";
import { Inicio } from "./containers/Inicio";
function App() {
  const [temaClaro, setTemaClaro] = useState(true);

  return (
    <ThemeProvider theme={temaClaro ? light_theme : dark_theme}>
      <EstiloGlobal />
      <Container>
        <Header toggleTema={() => setTemaClaro(!temaClaro)} />
        <Inicio />
      </Container>
    </ThemeProvider>
  );
}

export default App;
