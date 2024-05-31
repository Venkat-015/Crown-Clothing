import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
body {
    margin: 0;
    padding: 20px 40px;
    font-family: 'Madimi One'
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a{
    text-decoration: none;
    color:black;
  }
  *{
    box-sizing: border-box;
  }`
  export default createGlobalStyle;