import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom, #5e8ecf, #6fc182);
  }

  @media (max-width: 600px){
      html, body, #root{
         height: auto;
      }
  }
`;

export default GlobalStyle;
