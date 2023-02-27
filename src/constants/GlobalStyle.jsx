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
        --card-bg: #ffffff;
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
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
export default GlobalStyle
