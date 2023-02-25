import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)) {
        all: unset;
        display: revert
    }

    *, ::after, ::before {
        box-sizing: border-box
    }

    input, textarea {
        -webkit-user-select: auto
    }

    ::placeholder {
        color: unset
    }

    :where([hidden]) {
        display: none
    }

    :where([contenteditable]:not([contenteditable=false])) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
        -webkit-user-select: auto
    }

    :where([draggable=true]) {
        -webkit-user-drag: element
    }

    * {
        box-sizing: border-box;
        margin: 0;
        word-break: break-word;
    }

    html {
        -webkit-print-color-adjust: exact;
        -moz-box-shadow: -moz-activehyperlinktext;
    }

    body {
        font-family: Roboto, sans-serif;
        background-color: var(--bg-main);
        color: var(--main);
        font-size: 16px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    :root {
    }

    :root[data-force-color-mode='light'] {
        color-scheme: light dark;
        --side-nav-bg: #FFF;
        --primary-color: #1d1aff;
        --blog-card: #ededed;
        --main: black;
        --subtitle: #808080;
        --bg-main: #ffffff;
        --bg-secondary: #ffffff;
        --circle: #b0b0b0;
    }

    :root[data-force-color-mode='dark'] {
        --side-nav-bg: #35333b;
        --primary-color: #F65164;
        --blog-card: #1c2126;
        --main: #dbd4ff;
        --subtitle: #8782bb;
        --bg-main: white;
        --bg-secondary: #2B2549;
        --card-bg: #332E59;
        --circle: #585383;
    }

    /* Dark Color Scheme */
    @media (prefers-color-scheme: dark) {
        :root {
            --primary-color: #0008ff;
            --editor-color: #ff4640;
            --main: #fff;
            --subtitle: #c3c3c3;
            --bg-main: #121517;
            --button-color: #171b1e;
            --bg-secondary: #222025;
            --text-color-1: #00a6ff;
            --text-color-2: #435fff;
            --text-color-3: #00a6ff;
            --text-color-4: #ff8743;
            --border: #1f1f1f;
            --blog-card: #1c2126;
        }
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
