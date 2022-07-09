import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        position: absolute;
        width: 100%;
    }
    body {
        background-color: ${props => props.theme.colors.offwhite};
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }
    .about-body, .contact-body{
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyles;