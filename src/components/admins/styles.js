import styled from "styled-components";

export const AdminsList = styled.ul`
  display: flex;
`;

export const AdminsObject = styled.li`
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
`;

export const CreateContainer = styled.div`
  display: flex;
  background-color: #008ba3;
  height: 30%;
  border-radius: 50px;
`;
