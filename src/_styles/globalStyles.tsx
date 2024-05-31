import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    a {
        text-decoration: none;
    }
    body{
        margin:0;
        overflow:hidden;
        background-color:var(--background);
    }
    *{
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;    
    }
`
export default GlobalStyles;
