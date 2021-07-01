import styled from "styled-components";

export const Style = styled.button`
  width: 90%;
  height: 18vh;
  max-width: 700px;
  max-height: 145px;
  border-radius: 30px;
  border: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #f5f2f2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;

  .type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex: 3;
    div {
      height: 100%;
      width: 10px;
      background: ${props => props.green ? '#83FF07' 
      : props.yellow ? '#FFE607'
      : props.red ? '#ff473b' 
      : 'none'
      };
    }
  }

  .content {
    flex: 8;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
  }
`;

export const Main = styled.div`
  width: 90%;
  height: 18vh;
  max-width: 700px;
  max-height: 145px;
  border-radius: 30px;
  border: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #f5f2f2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;

  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    height: 100%;

    .content{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3px;
  
        .circle {
          width: 10px;
          height: 10px;
          background: #C4C4C4;
          border-radius: 50%;
        }
      }
    }
  }

  .type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex: 3;
    div {
      height: 100%;
      width: 10px;
      background: ${props => props.green ? '#83FF07' 
      : props.yellow ? '#FFE607'
      : props.red ? '#ff473b' 
      : 'none'
      };
    }
  }


`;