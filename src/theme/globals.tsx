import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

body {
    width:100%;
    max-width: 100vw;
    overflow-x:hidden;
    overflow-y:hidden;
}
* {
    box-sizing: border-box;
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    line-height: 1.4;
    font-family: 'Manrope', serif;
    font-weight: 800;
}
`;

export default GlobalStyle;
