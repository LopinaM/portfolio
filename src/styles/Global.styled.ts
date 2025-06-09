import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { font } from "./Common";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;

    min-width: 360px;
    background-color: ${theme.colors.secondaryBg};

    /* overflow: hidden; */
    }

    h2{
        ${font({
          weight: 700,
          Fmax: 36,
          Fmin: 30,
        })}
    }

    h3{
        ${font({
          //   family: "Popins",
          family: "sans-serif",
          weight: 700,
          Fmax: 16,
          Fmin: 14,
        })}
    }

    a{
        text-decoration: none;
        color: ${theme.colors.accentBg};
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    button{
       background-color: unset;
       border: none; 
       cursor: pointer;

    }

    input, textarea{
        ${font({
          family: "sans-serif",
          weight: 400,
          Fmax: 20,
          Fmin: 16,
        })}
    }
 
    section{
        /* padding: 100px 0; */

        @media ${theme.media.mobile}{
            padding: 20px 0;
        }
    }

    section:nth-of-type(odd){
        /* background-color: ${theme.colors.primaryBg}; */
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-of-type(even){
        background-color: ${theme.colors.primaryBg};
        /* background-color: ${theme.colors.secondaryBg}; */
    }


    ::selection {
    background: ${theme.colors.accentBg};
    color:  #fff;
  }
  
   

`;
