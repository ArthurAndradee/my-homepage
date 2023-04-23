import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vh;
        height: 100%;
        width: 100%;
    }
    html {
        background: var(--white);
    }
    :root {
    --white: #FFFFFF;
    --black: #000000;
    }
`;