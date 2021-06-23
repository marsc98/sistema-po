import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #000;
    }
    html, body, #root{
        width: 100%;
        height: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font: 400 1.8rem/1 'Roboto', sans-serif;
        outline: none;
    }
    form {
        width: 100%;
    }
    html{
        background: #FFFCFC;
    }
    :root{
        font-size: 62.5%;
    }

`;
