import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  handleSignIn = async () => {
    try {
      const session = await api.post("/session", {
        email: this.state.email,
        password: this.state.password
      });
      localStorage.setItem("token", session.data.token);
      localStorage.setItem("user_id", session.data.user.id);
      localStorage.setItem("user_email", session.data.user.email);
      localStorage.setItem("user_name", session.data.user.name);
      alert("Parabéns, você conseguiu se cadastrar no AnatoGame ;)");
      this.props.history.push("/rooms");
    } catch (response) {
      alert(
        "Infelizmente você não conseguiu logar, tente novamente mais tarde."
      );
      console.log(response);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleSignIn();
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
              <TButton type="button">Ainda não me registrei</TButton>
            </Link>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}
