import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    :root {
        --toastify-color-light: ${props => props.theme.colors.offwhite} !important;
        --toastify-text-color-light: ${props => props.theme.colors.darkgray} !important;
    }
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
    .about-body{
        display: flex;
        justify-content: center;
    }
    .contact-body{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .divider-container{
        margin-left: auto;
        margin-right: auto;
    }
    .divider-image-container{
        display: flex;
        justify-content: center;
        overflow: hidden;
        opacity: 0.8;

        img{
            height: 20px;
        }
    }
    .loading-container{
        display: flex;
        justify-content: center;

        @media ${props => props.theme.breakpoints.sm}{
            img{
                width: 50%;
            }
        }
    }
`;

export default GlobalStyles;