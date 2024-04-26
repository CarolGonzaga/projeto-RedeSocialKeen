import { createGlobalStyle, ThemeProvider } from "styled-components";
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
`;

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
