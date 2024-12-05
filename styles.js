import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Global CSS reset and styles */
  body, html, #root {
    margin: 0;
    padding: 0;
    background-color: #0e0e0e;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #151515;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffcc00;
    border-radius: 4px;
  }
`;
