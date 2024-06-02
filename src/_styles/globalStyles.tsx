import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a {
        text-decoration: none;
    }

    p{
        margin:0;
    }

    body{
        margin:0;
        overflow:hidden;
        background-color:var(--background);
    }
    
    *{
        transition: background-color 0.3s ease-in-out;    
    }
`
export default GlobalStyles;