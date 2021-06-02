import styled from 'styled-components';

export const Title = styled.h1 `
    color :   #4C7183;
    font-size :  ${props => props.subTitle ? '5vw' : '8vw'};
    font-family:'Roboto';
    font-style: normal;
    font-weight:  ${props=>props.titleBold ? '700': '300' };
    line-height: 5vw;
    letter-spacing: 0em;
    text-align: center;
    padding-bottom: 3%;
    padding-left :5%;
    padding-right:5%;

    margin-bottom: ${props=>props.space && '7vh'};

    @media(min-width: 768px){
        font-size :  ${props => props.subTitle ? '3vw' : '6vw'};
    }
    @media(min-width: 1080px){
        font-size :  ${props => props.subTitle ? '1.6vw' : '4vw'};
    }

`