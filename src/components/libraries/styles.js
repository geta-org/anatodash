import styled from "styled-components";

export const ThemeBox = styled.li`
    margin: 10px 0 0 0;
    border: 2px solid red;
    height: 100px;
    border-radius: 50px;
    width: 90%;
    display: flex;
    cursor: pointer;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    .textBox {
        display: flex;
        height: 90%;
        width: 75%;
        text-align: center;
        align-content: center;
    }
    .imageBox {
        height: 100%;
        width: 25%;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
        justify-self: center;
        display: flex;
    }
    p {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 20px;
        align-items: center;
        justify-content: center;
        color: black;
    }
    img {
        height: 70px;
        width: 70px;
        object-fit: fill;
        border-radius: 1000px;
        border: none;
    }
`;

export const ThemeContainer = styled.div`
    background-color: #80d6e1;
    display: flex;
    height: 100%;
    width: 100%;
    .Button {
        display: flex;
        border: 1px solid red;
        width: 8%;
        height: 100%;
        justify-content: center;
        img {
            cursor: pointer;
            width: 80%;
            height: 10%;
        }
    }
`;

export const PiecesContainer = styled.div`
    border: 1px solid orangered;
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    input {
        color: #ffffff;
        ::placeholder {
            color: #ffffff;
        }
    }
`;

export const PiecesList = styled.div`
    border: 1px solid violet;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
`;

export const PieceBox = styled.div`
    width: 90%;
    height: 25%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 50px;
    align-items: center;
    margin: 10px 0 0 0;
    p {
        font-size: 20px;
    }
    img {
        width: 80%;
        height: 80%;
    }
`;
