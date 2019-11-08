import React, { Component } from "react";
import api from "../../services/api";
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
import { Link } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
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

    handleName = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleSignUp = async () => {
        try {
            await api.post("/user", {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            alert("Parabéns, você conseguiu se cadastrar no AnatoGame ;)");
        } catch (response) {
            alert(
                "Infelizmente você não conseguiu se cadastrar, tente novamente mais tarde."
            );
            console.log(response);
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.handleSignUp();
    };

    render() {
        return (
            <Container>
                <FormWrapper>
                    <Form onSubmit={this.handleSubmit}>
                        <LogoAnatoGame src={LogoSrc} />
                        <FormGroup>
                            <label>Nome completo</label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleName}
                                placeholder="Digite seu nome completo"
                            />
                        </FormGroup>
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
                            <Button type="submit">Register</Button>
                        </FormGroup>
                        <Link to="/">
                            <TButton type="button">Já possuo conta :)</TButton>
                        </Link>
                    </Form>
                </FormWrapper>
            </Container>
        );
    }
}
