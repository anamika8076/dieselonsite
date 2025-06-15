import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    background-image: url('/Background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    max-hieght:100px;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;