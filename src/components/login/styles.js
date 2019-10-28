import styled from "styled-components";

export const Container = styled.div`
    background-color: #00bcd4;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
`;

export const Form = styled.form`
    height: 500px;
    width: 300px;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    label {
        margin-bottom: 10px;
    }
    input {
        height: 50px;
        outline: none;
        padding-left: 5px;
    }
`;

export const LogoAnatoGame = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 50px;
`;

export const Button = styled.button`
    height: 35px;
    border: none;
    background-color: #00bcd4;
    color: white;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        background-color: #065563;
    }
`;

export const TButton = styled.button`
    height: 35px;
    border: none;
    background: none;
    color: #008ba3;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        background-color: #008ba3;
        color: whitesmoke;
    }
`;
