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

export const light_theme = {
  cores: {
    fundo: '#FFFFFF',
    letra: '#242A41',
    primario: '#0092A7',
    secundario: '#164C51',
    terciario: '#585F6F',
    menu: 'rgb(156, 230, 240)',
    hero: linesLight,
    sptech: sptech_light,
    linkedin: linkedin_light,
    github: github_light,
    zap: zap_light
  }
};

export const dark_theme = {
  cores: {
    fundo: '#111111',
    letra: '#FFFFFF',
    primario: '#0092A7',
    secundario: '#164C51',
    terciario: '#585F6F',
    menu: 'rgb(20, 78, 83)',
    hero: linesDark,
    sptech: sptech_dark,
    linkedin: linkedin_dark,
    github: github_dark,
    zap: zap_dark
  }
};
