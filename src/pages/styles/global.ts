import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        overflow-x: hidden;
    }
    #__next{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
    }
`