import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#F5F3E3",
    foreground: "#000000",
    card: "#F8F6EA",
    cardForeground: "#000000",
    primary: "#9E5E3E",
    primaryForeground: "#F8F6EA",
    secondary: "#E8E4D0",
    secondaryForeground: "#000000",
    muted: "#D9D4C0",
    mutedForeground: "#6B5D4D",
    accent: "#009DE2",
    accentForeground: "#F8F6EA",
    border: "#D4CDB8",
    destructive: "#E54545",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Source Sans 3', system-ui, sans-serif",
  },
  radius: "0.75rem",
  maxWidth: "1200px",
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
};


const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap');
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Adicionado para melhor legibilidade do texto body */
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    /* Adicionado para títulos ficarem mais harmônicos */
    line-height: 1.2;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyles;
