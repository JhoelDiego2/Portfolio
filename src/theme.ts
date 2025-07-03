import linesLight from "./assets/img/lines_light.png";
import linesDark from "./assets/img/lines_dark.png";
import linkedin_light from "./assets/svg/linkedin_light.svg";
import linkedin_dark from "./assets/svg/linkedin_dark.svg";
import github_light from "./assets/svg/github_light.svg";
import github_dark from "./assets/svg/github_dark.svg";
import zap_light from "./assets/svg/zap_light.svg";
import zap_dark from "./assets/svg/zap_dark.svg";
import sptech_light from "./assets/img/sptech_light.png";
import sptech_dark from "./assets/img/sptech_dark.png";
// import seta_light from "./assets/svg/seta_light.svg";

export const light_theme = {
  cores: {
    fundo: '#FFFFFF',
    letra: '#242A41',
    primario: '#0092A7',
    secundario: '#164C51',
    terciario: '#585F6F',
    menu: 'rgb(11, 130, 146)',
    menu_suave: 'rgba(11, 130, 146, 0.23)',
    hero: linesLight,
    sptech: sptech_light,
    linkedin: linkedin_light,
    github: github_light,
    zap: zap_light,
    // seta: seta_light
  }
};

export const dark_theme = {
  cores: {
    fundo: '#111111',
    letra: '#FFFFFF',
    primario: '#0092A7',
    secundario: '#164C51',
    terciario: '#585F6F',
    menu: 'rgb(38, 221, 197)',
    menu_suave: 'rgba(38, 221, 197, 0.12)',
    hero: linesDark,
    sptech: sptech_dark,
    linkedin: linkedin_dark,
    github: github_dark,
    zap: zap_dark,
    // seta: seta_light
  }
};
