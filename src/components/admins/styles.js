import styled from "styled-components";

export const UsersObject = styled.li`
  background-color: #008ba3;
  display: grid;
  width: 70%;
  height: 9%;
  border-radius: 50px;
  margin-top: 3%;
  cursor: pointer;
  p {
    margin: 10px;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
    text-align: center;
    font-size: 20px;
    overflow: hidden;
    flex-shrink: 1;
  }
`;

export const BlankContainer = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  height: 100%;
  width: 100%;
  align-items: end;
`;

export const EditContainer = styled.div`
  display: grid;
  background-color: #008ba3;
  height: 20%;
  border-radius: 40px;
  grid-template-rows: 1.5fr 1fr 3fr;
  margin-bottom: 5%;
  img {
    height: 125%;
    cursor: pointer;
    width: 10%;
    margin-left: 2%;
    margin-top: 2%;
  }
`;

export const ContainerTexts = styled.div`
  margin: 2%;
  margin-top: 4%;
  .CreationField {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .TextProps {
    color: #ffa927;
    font-weight: bold;
    font-size: 18px;
    margin-right: 5px;
  }
  .TextData {
    color: white;
    font-size: 16px;
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  display: grid;
  height: 70%;
  align-items: center;
  justify-items: center;
  .Buttons {
    width: 30%;
    height: 90%;
    border: none;
    border-radius: 500px;
    cursor: pointer;
    text-align: center;
    color: white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
