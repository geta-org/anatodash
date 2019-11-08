import styled from "styled-components";

export const ThemeBox = styled.div`
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
        font-size: 22px;
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

export const ThemeImage = styled.div``;
