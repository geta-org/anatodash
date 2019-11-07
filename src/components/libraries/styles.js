import styled from "styled-components";

export const ThemeBox = styled.div`
    border: 1px solid red;
    height: 100px;
    border-radius: 50px;
    width: 90%;
    display: flex;
    cursor: pointer;
    align-content: center;
    align-items: center;
    justify-content: center;
    p {
        font-size: 18px;
        background-color: black;
    }
    img {
        height: 90%;
        width: 35%;
        border-radius: 100%;
    }
    .textBox {
        background-color: orange;
        height: 90%;
        width: 75%;
    }
    .imageBox {
        background-color: orangered;
        height: 100%;
        width: 25%;
    }
`;

export const ThemeImage = styled.div``;
