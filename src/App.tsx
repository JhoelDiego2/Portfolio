import Header from "./containers/Sidebar";
import {  useState } from "react";
import { ThemeProvider } from "styled-components";
import { light_theme, dark_theme } from "./theme";
import EstiloGlobal from "./styles";
import { Inicio } from "./containers/Inicio";
function App() {
  const [temaClaro, setTemaClaro] = useState(true);

  return (
    <ThemeProvider theme={temaClaro ? light_theme : dark_theme}>
      <EstiloGlobal />
        <Header toggleTema={() => setTemaClaro(!temaClaro)} />
        <Inicio />
    </ThemeProvider>
  );
}

export default App;
