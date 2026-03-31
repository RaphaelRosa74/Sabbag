import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./styles/GlobalStyles";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
