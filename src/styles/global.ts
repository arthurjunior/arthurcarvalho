import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

  }

  html {
    scroll-behavior: smooth;
  }
  :root {
    font-size: 62.5%;
    view-transition-name: root;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: rgb(30, 30, 37);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: rgb(82, 82, 224);}
  body {
    height: 100rem;
    background: #09090b;
  }

  a {
    text-decoration: none;
  }
`;
