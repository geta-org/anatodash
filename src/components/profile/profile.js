//Libs Imports
import React, { Component } from "react";
import api from "../../services/api";

//Styles
import { Container } from "../../styles/global";

import { GeneralContainer, ProfileContainer, ChangeContainer } from "./styles";

// Images imports
import CloseButton from "../../assets/xMark2.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanging: false,
      oldPass: "",
      newPass: ""
    };
  }

  handleChange = () => {
    if (this.state.isChanging) {
      this.setState({
        isChanging: false
      });
    } else {
      this.setState({
        isChanging: true
      });
    }
  };

  changePassword = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let { oldPass, newPass } = this.state;
    try {
      await api.put(
        "/user/",
        {
          oldPassword: oldPass,
          password: newPass
        },
        config
      );
      console.log("Password changed.");
      alert("Parabéns, você conseguiu mudar sua senha ;)");
    } catch (response) {
      console.log(response.message);
      alert("Infelizmente, você não conseguiu mudar sua senha");
    }
  };

  handleOldPass = e => {
    let pass = e.target.value;
    this.setState({
      oldPass: pass
    });
  };

  handleNewPass = e => {
    let pass = e.target.value;
    this.setState({
      newPass: pass
    });
  };

  render() {
    return (
      <Container>
        <div
          style={{
            height: "100%",
            width: "240px",
            backgroundColor: "#008BA3"
          }}
        ></div>
        <GeneralContainer>
          <ProfileContainer>
            <div className="textField">
              <h1>Nome</h1>
              <h2>{localStorage.getItem("user_name")}</h2>
              <h1>E-mail</h1>
              <h2>{localStorage.getItem("user_email")}</h2>
            </div>
            <div className="button" onClick={() => this.handleChange()}>
              <p>Mudar Senha</p>
            </div>
          </ProfileContainer>
          {this.state.isChanging ? (
            <ChangeContainer>
              <img
                alt=""
                src={CloseButton}
                onClick={() => this.handleChange()}
              />
              <div className="inputFields">
                <div className="individualField">
                  <p>Senha antiga</p>
                  <input
                    placeholder="Digite a senha antiga"
                    value={this.state.oldPass}
                    onChange={this.handleOldPass}
                  />
                </div>
                <div className="individualField">
                  <p>Senha nova</p>
                  <input
                    placeholder="Digite a senha nova"
                    value={this.state.newPass}
                    onChange={this.handleNewPass}
                  />
                </div>
                <div className="button" onClick={() => this.changePassword()}>
                  <p>Mudar</p>
                </div>
              </div>
            </ChangeContainer>
          ) : null}
        </GeneralContainer>
      </Container>
    );
  }
}
