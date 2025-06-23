import Header from "./containers/Sidebar";
import {  useState } from "react";
import { ThemeProvider } from "styled-components";
import { light_theme, dark_theme } from "./theme";
import EstiloGlobal, { Container } from "./styles";

function App() {
  const [temaClaro, setTemaClaro] = useState(true);

  return (
    <ThemeProvider theme={temaClaro ? light_theme : dark_theme}>
      <EstiloGlobal />
      <Container>
        <Header toggleTema={() => setTemaClaro(!temaClaro)} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
