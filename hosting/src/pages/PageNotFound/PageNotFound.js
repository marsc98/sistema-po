import styled from 'styled-components';

export const Main = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  
  width: min(90%, 1220px);

  padding-top: 1.3vh;
  padding-left: 1.3vh;

  @media (min-width: 768px){
    width: 70%;
    height: 100vh;
  }

`;

export const Message = styled.h1`

  z-index: 999;

  height: clamp(10%, 9vh, 100vh) 0 4rem;

  line-height: 4rem;

  font-size: 1.3rem;
  font-weight: 700;

  margin: auto;

  text-align: left;

  @media (min-width: 768px){
    font-size: 4rem;
    line-height: 7rem;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 1024px){
    font-size: 5rem;
    line-height: 8rem;
    text-align: center;
    margin: 0;
  }
  
`;
