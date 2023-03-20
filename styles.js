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
    background: rgb(10,17,40);
    background: -moz-linear-gradient(15deg, rgba(10,17,40,1) 22%, rgba(0,31,84,1) 66%, rgba(3,64,120,1) 91%) center center fixed no-repeat;
    background: -webkit-linear-gradient(15deg, rgba(10,17,40,1) 22%, rgba(0,31,84,1) 66%, rgba(3,64,120,1) 91%) center center fixed no-repeat;
    background: linear-gradient(15deg, rgba(10,17,40,1) 22%, rgba(0,31,84,1) 66%, rgba(3,64,120,1) 91%) center center fixed no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0a1128",endColorstr="#034078",GradientType=1);
    color: var(--color-quinary);
  }
  ul {
  margin: 55px 0 55px 20px;
  padding: 0;
  list-style: none;
  display: grid; 
  grid-auto-flow: row dense;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(1, 1fr); 
  gap: 10px 0; 
  }

  
  li {
    margin: 0;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background: rgba( 17, 17, 17, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.5 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 90%;
    gap:0;
  }

input {
  font-size: 1rem;
  font-weight: 200;
  color: var(--color-quinary);
  background: rgba(17, 17, 17, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 5px;
  width: 90%;
  height: 30px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }

} 

  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    color: var(--color-quinary);
  }

  p {
    font-size: 1rem;
    font-weight: 200;
    color: var(--color-quinary);
  }

  button {
    font-size: 1rem;
    font-weight: 200;
    color: var(--color-quinary);
    background: rgba( 17, 17, 17, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: var(--border-radius);
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin: 5px;
  }

 :root {
    --color-primary: #0A1128; // Oxford Blue
    --color-secondary: #001F54; // Penn Blue
    --color-tertiary: #034078; // Indigo Dye 
    --color-quaternary: #1282A2; // Cerulean
    --color-quinary: #FEFCFB; // White
    --border-radius: 5px;}
`;

export const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: sticky;
  height: 50px;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.37);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: var(--border-radius);
  border-top: 2px outset rgba(255, 255, 255, 0.18);
`;
