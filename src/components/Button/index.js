import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    display: flex;
    width: 100%;
    height: 35px;

    align-items: center;
    justify-content: center;
    
    color : #ffffff;

    font-size:  6vw;
    font-style: normal;
    font-weight: 600;
    
    text-align: center;
    text-decoration : none;
    
    background-color: #365A6B;
    border-radius: 10px;

    cursor: pointer;

    margin-top: 2vh;

    @media(min-width: 768px){
        font-size: 4vw;
    }
    @media(min-width: 1080px){
        font-size: 2vw;
        width: 100%;
        height: 40px;
    }

`