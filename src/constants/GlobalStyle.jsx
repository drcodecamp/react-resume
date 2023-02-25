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
        background-color: #222025;
        font-size: 16px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    :root {
    }

    :root[data-force-color-mode='light'] {
        color-scheme: light dark;
        --primary-color: #ffce63;
        --editor-color: #ffce63;
        --subtitle: #000000;
        --bg-main: #ffffff;
        --button-color: #d7d7d7;
        --bg-secondary: #ffffff;
        --text-color-1: #00a6ff;
        --text-color-2: #435fff;
        --text-color-3: #00a6ff;
        --text-color-4: #ff8743;
        --border: #eaeaea;
        --blog-card: #ededed;
    }

    :root[data-force-color-mode='dark'] {
        --primary-color: #0008ff;
        --editor-color: #1ec74c;
        --button-color: #2b292f;
        --border: #1f1f1f;
        --blog-card: #1c2126;
        --main: #fff;
        --subtitle: #c3c3c3;
        --bg-main: #18171a;
        --bg-secondary: #222025;
        --text-color-1: #00a6ff;
        --text-color-2: #435fff;
        --text-color-3: #00a6ff;
        --text-color-4: #ff8743;
        --card-bg: #2b292f;
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
