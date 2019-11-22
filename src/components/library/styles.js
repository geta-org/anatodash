import styled from "styled-components";

export const ThemeBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    img {
        width: 10%;
        cursor: pointer;
    }
`;

export const ThemeBox = styled.li`
    margin: 10px 0 0 0;
    height: 100px;
    border-radius: 50px;
    width: 85%;
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
export const IndividualPieceContainer = styled.div`
    background-color: #008ba3;
    border: 1px solid orangered;
    display: flex;
    flex: 1;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    .Button {
        display: flex;
        border: 1px solid red;
        width: 20%;
        height: 100%;
        justify-content: center;
        img {
            cursor: pointer;
            width: 80%;
            height: 10%;
        }
    }
`;

export const PieceImagesContainer = styled.ul`
    border: 1px solid greenyellow;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    .Name {
        border: 1px solid blue;
        display: flex;
        height: 25%;
        p {
            color: #ffa927;
            font-weight: bold;
        }
        input {
            background: none;
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: 2px solid #ffa927;
        }
    }
    .Images {
        border: 1px solid salmon;
        height: 96%;
        img {
            height: 100px;
            width: 100px;
        }
    }
`;

export const PieceImage = styled.li`
    .Images {
        border: 1px solid salmon;
        height: 96%;
        img {
            height: 100px;
            width: 100px;
        }
    }
`;

export const PiecesList = styled.ul`
    border: 1px solid violet;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 95%;
`;

export const PieceBox = styled.li`
    width: 80%;
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
