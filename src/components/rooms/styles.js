import styled from "styled-components";

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

export const RoomWrapper = styled.div`
    display: flex;
    margin: 30px;
    width: 90%;
    flex-direction: row;
    height: 13%;
    align-items: center;
    img {
        height: 40%;
        cursor: pointer;
        width: 20%;
    }
`;

export const RoomBox = styled.div`
    display: flex;
    width: 80%;
    border-radius: 20px;
    background-color: #e9e9e9;
    height: 90%;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    img {
        height: 70%;
    }
`;

export const RoomProps = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    margin: 5%;
    h1 {
        font-size: 18px;
        height: 33%;
        color: #26418f;
    }
    p {
        font-size: 14px;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 33%;
        margin-top: 5px;
        img {
            height: 100%;
            width: 10%;
            object-fit: contain;
            margin-right: 5%;
        }
        p {
            margin-right: 5%;
            color: #26418f;
        }
    }
`;

export const IndividualRoomGeneral = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    background-color: #e9e9e9;
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
`;

export const IndividualCloseColumn = styled.div`
    display: flex;
    width: 6%;
    justify-content: center;
    margin: 0 0 0 2%;
    img {
        height: 8%;
        width: 100%;
        object-fit: contain;
        cursor: pointer;
    }
`;

export const IndividualRoomContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1%;
`;

export const IndividualRoomHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
        color: #26418f;
        font-size: 27px;
        text-align: center;
        margin-top: 3%;
    }
    p {
        color: #26418f;
        font-weight: 100px;
        text-align: end;
        margin: 2%;
    }
`;

export const IndividualRoomBody = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 1% 0.5%;
        h2 {
            color: #26418f;
            margin-right: 10px;
            font-size: 20px;
            width: 18%;
        }
        input {
            border: none;
            background-color: transparent;
            font-size: 17px;
            color: #26418f;
            border-bottom: 1px solid #ffa927;
            width: 50%;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        width: 99%;
        margin: 1% 0.5%;
        color: #26418f;
        h2 {
            margin-right: 10px;
            font-size: 20px;
            width: 20%;
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            form {
                width: 5%;
                input {
                    width: 100%;
                    border: none;
                    background-color: transparent;
                    font-size: 17px;
                    color: #26418f;
                    border-bottom: 1px solid #ffa927;
                    margin: 0 2%;
                    text-align: center;
                }
            }
        }
    }
`;

export const IndividualRoomQuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    h1 {
        font-size: 25px;
        color: #26418f;
        text-align: center;
    }
`;

export const IndividualRoomQuestionsGroup = styled.div`
    display: flex;
    height: 100%;
    .questionSlider {
        font-size: 60px;
        color: #26418f;
        font-weight: 10;
        align-self: center;
        background: none;
        border: 1px solid whitesmoke;
        margin: 0 1%;
    }
`;

export const IndividualRoomQuestions = styled.div`
    display: flex;
    width: 93%;
    background-color: #f9f8f8;
    border-radius: 40px;
    height: 100%;
    padding: 2%;
    flex-direction: column;
    .title {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 25%;
        h1 {
            align-self: center;
            font-weight: 10;
        }
        form {
            width: 97%;
            margin-left: 3%;
            textarea {
                background: none;
                width: 100%;
                height: 100%;
                resize: none;
                border: none;
                border-bottom: 2px solid #ffa927;
                font-size: 15px;
            }
        }
    }
    .body {
        height: 75%;
        display: flex;
        flex-direction: row;
        .optionsImage {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1%;
            width: 70%;
            align-items: center;
            button {
                width: 50%;
                height: 30%;
                margin: 5%;
            }
        }
    }
    .answerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: #26418f;
        .answerOptions {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 10%;
        }
        .answerGroup {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
        .alternativeGroup {
            display: flex;
            width: 95%;
            height: 95%;
            flex-direction: column;
            justify-content: space-around;
        }
        .alternativeContainer {
            display: flex;
            height: 20%;
            margin: 1%;
            align-items: center;
            background-color: whitesmoke;
            img {
                height: 100%;
                width: 20%;
                cursor: pointer;
            }
            .rightCheck {
                opacity: 1;
            }
            .wrongCheck {
                opacity: 0.4;
            }
            input {
                margin: 0 1%;
                height: 100%;
                width: 98%;
                background: none;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 3px solid #c77800;
                font-size: 15px;
            }
        }
    }
`;

export const ButtonsQuestions = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 6%;
    margin: 0 1%;
    img {
        margin: 5%;
        cursor: pointer;
        height: 18%;
        width: 90%;
    }
`;

export const ButtonsRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 70px;
    width: 100%;
    img {
        width: 10%;
        height: 100%;
        cursor: pointer;
        object-fit: contain;
        margin-bottom: 1%;
    }
`;
