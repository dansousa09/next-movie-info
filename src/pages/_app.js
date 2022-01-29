import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import { DialogProvider } from "../context/dialog";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dark}>
      <DialogProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </DialogProvider>
    </ThemeProvider>
  );
}

export default MyApp;
