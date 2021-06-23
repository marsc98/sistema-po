import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 38px;

    align-items: center;
    justify-content: center;
    
    color : #ffffff;

    font-size:  4vw;
    font-style: normal;
    font-weight: 600;
    
    text-align: center;
    text-decoration : none;
    
    background-color: ${props => props.green ? '#1CCA18' : props.red ? '#CA2318' : '#365A6B'};
    border-radius: 15px;

    cursor: pointer;

    margin-top: 2vh;

    @media(min-width: 768px){
        font-size: 3vw;
        height: 50px;
    }
    @media(min-width: 1080px){
        font-size: 1.4vw;
        width: 100%;
        height: 40px;
    }

`