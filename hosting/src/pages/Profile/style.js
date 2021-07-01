import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 10%;

    span{
        font-size: 4vw;
        @media(min-width: 768px){
            font-size :  2vw;
        }
        @media(min-width: 1080px){
            font-size :  1vw;
        }
        a{
            font-size: 4vw;
            color: #7FEA6E;
            @media(min-width: 768px){
                font-size :  2vw;
            }
            @media(min-width: 1080px){
                font-size :  1vw;
            }
        }
    }

    div{
        margin-top: 3vh;
    }

    @media(min-width: 768px){
        padding-top: 3%;
    }

    .Main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media(min-width: 768px){
            width: 72%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        @media(min-width: 1080px){
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 4vh;
        }
    }
`;

export const FormBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 100%;
        height: 3vh;
        margin-bottom: 1rem;
    }

    .check-boxes {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            display: flex;
            justify-content: center;
            align-items: center; 
            flex-direction: row;

            input {
                margin-right: 8px;
            }

            a {
                font-size: 4vw;

                @media(min-width: 768px) {
                    font-size: 2vw;
                }
            }
        }
    }
`;

export const ButtonArea = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4vh;
`;