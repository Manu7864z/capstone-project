import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

 :root {
    --color-primary: #3e1b36;
    --color-secondary: #bee1c6;
    --border-radius: 5px;}
`;

export const StyledHeader = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
  padding: 0;
  position: relative;
  top: 5px;
  left: 20px;
  width: 90%;
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-secondary);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  border: 3px outset var(--color-secondary);
  border-radius: 5px;
  box-shadow: 0 2px 5px 2px var(--color-secondary);
`;
