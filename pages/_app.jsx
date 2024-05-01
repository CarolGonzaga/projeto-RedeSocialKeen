import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import moment from "moment";
import "moment/locale/pt-br";

import theme from "../src/theme";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.backgroundBody};
    color: ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    transition: 0.3s;
  }

  a:hover {
    color: ${(props) => props.theme.primaryHover};
  }

  *::-webkit-scrollbar {
      width: 10px;
  }

  *::-webkit-scrollbar-track {
      background: ${(props) => props.theme.white};
      border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.black};
      border-radius: 10px;
      border: none;
  }
`;

function App({ Component, pageProps }) {
  
  useEffect(() => {
    moment.locale('pt-br')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
