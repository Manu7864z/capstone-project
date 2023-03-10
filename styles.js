import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

 :root {
    --color-primary: #000400;
    --color-secondary: #a9fac5;}


`;
