import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 2fr 1fr;
  border: 1px solid blueviolet;
  justify-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 50%;
  height: 100%;
  color: #008ba3;
  justify-content: flex-end;
  align-items: center;
  .textField {
    height: 30%;
  }
  h1 {
    font-size: 120%;
  }
  h2 {
    font-size: 100%;
    font-weight: normal;
  }
  .button {
    background-color: #008ba3;
    width: 20%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    p {
      color: white;
      text-align: center;
    }
  }
`;

export const ChangeContainer = styled.div`
  display: grid;
  border: 1px solid darkgoldenrod;
  width: 35%;
  background-color: #008ba3;
  grid-template-rows: 1fr 3fr 1fr;
  img {
    height: 10%;
  }
  .inputFields {
    width: 95%;
    border: 1px solid salmon;
  }
  .button {
    background-color: white;
    color: #008ba3;
  }
`;
