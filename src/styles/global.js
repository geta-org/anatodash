import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html, body, #root{
    height: 100%
}

img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

body{
    color: #008BA3;
    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;

}
`;

export default GlobalStyle;

export const Container = styled.div`
    background-color: #f5f5f5;
    display: flex;
    height: 100%;
    width: 100%;
`;

export const RoomsGeneral = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    width: 60%;
`;

export const RoomsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 70px;
    flex-direction: column-reverse;
    margin: 0 5px;
    img {
        cursor: pointer;
        width: 70px;
        object-fit: contain;
        height: 70px;
        margin-bottom: 10%;
    }
`;

export const SearchBox = styled.form`
    display: flex;
    border: 2px solid #008ba3;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    height: 4.5%;
    width: 70%;
    flex-direction: row;
    img {
        object-fit: contain;
        height: 80%;
        width: 10%;
    }
    input {
        width: 90%;
        border: none;
        margin-left: 2%;
        font-size: 15px;
        background: none;
        color: #26418f;
    }
`;

export const RoomWrapper = styled.ul`
    display: flex;
    margin: 30px;
    height: 95.5%;
    width: 90%;
    flex-direction: column;
    overflow-y: scroll;
`;
