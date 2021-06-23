import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .desconnect {
    width: 100%;
    display: felx;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    div {
      width: 30%;

      @media(min-width: 768px) {
        width: 15%;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;