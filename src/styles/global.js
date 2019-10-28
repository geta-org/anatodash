import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html, body, #root{
    height: 100%
}

img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

body{
    color: #008BA3;
    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;

}
`;

export default GlobalStyle;
