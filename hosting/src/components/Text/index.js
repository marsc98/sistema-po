import styled from 'styled-components';

export const Text = styled.h1 `
    color :   ${props => props.terms ? '#000' : '#4C7183'};
    font-size :  3.8vw;
    font-family:'Roboto';
    font-style: normal;
    font-weight: 300;
    line-height: 5vw;
    letter-spacing: 0em;
    text-align: center;
   
    @media(min-width: 768px){
        font-size :  2vw;
        line-height: 3vw;
    }
    @media(min-width: 1080px){
        font-size :  1vw;
        line-height: 2vw;
    }

`