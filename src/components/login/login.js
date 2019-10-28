import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    FormWrapper,
    Form,
    FormGroup,
    LogoAnatoGame,
    Button,
    TButton
} from "./styles";

import LogoSrc from "../../assets/logoanatogame.png";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleEmail = e => {
        this.setState({
            email: e.target.value
        });
    };

    handlePass = e => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <Container>
                <FormWrapper>
                    <Form onSubmit={this.handleSubmit}>
                        <LogoAnatoGame src={LogoSrc} />
                        <FormGroup>
                            <label>E-mail</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                placeholder="Digite seu e-mail"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Senha</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePass}
                                placeholder="Digite sua senha"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Login</Button>
                        </FormGroup>
                        <Link to="/register">
                            <TButton type="button">
                                Ainda não me registrei
                            </TButton>
                        </Link>
                    </Form>
                </FormWrapper>
            </Container>
        );
    }
}
