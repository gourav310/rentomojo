import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";

const apply = prop => {
  return style("mode", {
    light: lite[prop],
    dark: dank[prop]
  });
};

const lite = {
  background: "#FFFAF0",
  fontSize: "5px",
  color: "#111"
};
const dank = {
  background: "#242424",
  fontSize: "50px",
  color: "#EEE"
};
export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${apply("background")};
  color: ${apply("color")};
  }
td,tr {
   color: ${style("mode", {
     light: "#111",
     dark: "#EEE"
   })};
}
.navbar {
  background-color: ${style("mode", {
    light: "#D1E8E2",
    dark: "#379683"
  })};
}
.anyClass {
  font-size: 5px
}
.card {
  background-color: ${style("mode", {
    light: "#EEE",
    dark: "#CF6679"
  })};
}
.title1 {
  background-color: ${style("mode", {
    light: "#EEE",
    dark: "#CF6679"
  })};
}

`;
