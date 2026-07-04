import {createGlobalStyle} from "styled-components";
import backgroundImage from "@/assets/images/background.png";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    }
    
    img,
    picture,
    svg {
        display: block;
        max-width: 100%;
    }
    
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul,
    ol {
        list-style: none;
    }
`;