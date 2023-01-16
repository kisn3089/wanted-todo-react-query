import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #222;
        /* color: #fff; */
    }

    h1,h2,h3,h4,h5,h6 {
        color: #fff;
    }

    span {
        color: #fff;
    }

    li {
        color: #fff;
    }

    input {
        border: none;
        &:focus {
            outline: none;
        }
    }

    textarea {
        border: none;
        &:focus {
            outline: none;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        &:disabled {
            background-color: #888;
            cursor: default;
        }
    }
`;

export const CenterContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 70px;
`;
