import styled from "styled-components";

export const Style = styled.button`
  width: 90%;
  max-width: 700px;
  height: 145px;
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
      background: #83FF07;
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