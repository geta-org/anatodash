import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 3fr 1fr;
  justify-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: #008ba3;
  justify-content: flex-end;
  align-items: center;
  .textField {
    height: 30%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-bottom: 3%;
  }
  h1 {
    font-size: 120%;
    margin-top: 5%;
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
    margin-bottom: 3%;
    cursor: pointer;
    p {
      color: white;
      text-align: center;
    }
  }
`;

export const ChangeContainer = styled.div`
  display: flex;
  width: 30%;
  height: 90%;
  background-color: #008ba3;
  grid-template-rows: 1fr 3fr 1fr;
  border-radius: 50px;
  img {
    margin: 2%;
    height: 15%;
    width: 8%;
    cursor: pointer;
  }
  .inputFields {
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 10%;
  }
  .individualField {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .button {
    background-color: white;
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    margin-bottom: 3%;
    align-self: center;
    cursor: pointer;
    p {
      color: #008ba3;
      text-align: center;
      font-size: 23px;
    }
  }
  p {
    color: #ffa927;
    font-weight: bolder;
    font-size: 18px;
  }
  input {
    background: none;
    border: none;
    border-bottom: 2px solid #ffa927;
    color: white;
    width: 60%;
    font-size: 16px;
    margin-bottom: 5%;
    ::placeholder {
      color: white;
    }
  }
`;
