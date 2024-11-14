// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212; /* Fundo escuro */
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
