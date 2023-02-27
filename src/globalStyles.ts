import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Martel Sans', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--black);

        ::-webkit-scrollbar {
            width: 12px;               
        }

        ::-webkit-scrollbar-track {
            background: var(--black);        
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--gray);   
            border-radius: 20px;       
            border: 3px solid  var(--black);  
        }
    }

    :root {
        --white: #fff;
        --black: #141414;
        --black-200: #181818;
        --black-300: #363636;
        --black-300: #232323;
        --red: #B9090B;
        --gray: #808080;
        --gray-hover: rgba(128, 128, 128, 0.2);
        --gray-200: #ccced1;
        --gray-300: #d2d2d2;
        --gray-400: #333333;
        --gray-500: #2f2f2f;
        --green: #41C462;
    }
`;
