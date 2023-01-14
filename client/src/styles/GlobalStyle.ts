import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
} 
    body {
        background-color: #222;
        color: #fff;

        /* input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:autofill {
    background-color: transparent;
    color: #fff;
} */
    }

`;

export const CenterContainer = styled.main`
  display: flex;
  justify-content: center;
`;
