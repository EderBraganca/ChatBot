import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --textColor: ${({ theme }) => theme.textColor};
    --backgroundColor: ${({ theme }) => theme.backgroundColor};
    --inputColor: ${({ theme }) => theme.inputColor};
    --inputBorder: ${({ theme }) => theme.inputBorder};
    --strongText: ${({ theme }) => theme.strongText};
    --logoColor: ${({ theme }) => theme.logoColor};
  }

  body {
    background-color: var(--backgroundColor);
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: all 0.25s linear;
  }
`;