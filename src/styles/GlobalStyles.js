import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'virus';
        src: url(/assets/fonts/VIRUST.ttf);
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        /* outline: 1px solid red; */
    }

    img {
        max-width: 100%;
        display: block;
        max-width: 50%;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        margin: 0;
        font-family: 'virus', serif;
        background-color: #fcf8f6;
        font-size: 14px;
        max-width: 1440px;
        margin-inline: auto;
        padding-inline: 24px;

        @media screen and (width>=768px) {
            padding-inline: 40px;
	}

	@media screen and (width>=1440px) {
		padding-inline: 112px;
	}


    }

`;
