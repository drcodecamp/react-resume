import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: Roboto, sans-serif;
        background-color: #222025;
        font-size: 16px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    :root {
        --primary-color: #ff00ae;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
export default GlobalStyle
