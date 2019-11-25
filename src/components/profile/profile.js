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
    this.state = {};
  }

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
              <h2>Donquixote Doflamingo</h2>
              <h1>E-mail</h1>
              <h2>Doflamingo@midasbr.com</h2>
            </div>
            <div className="button">
              <p>Mudar Senha</p>
            </div>
          </ProfileContainer>
          <ChangeContainer>
            <img alt="" src={CloseButton} onClick={this.handleChange} />
            <div className="inputFields">
              <div className="individualField">
                <p>Senha antiga</p>
                <input placeholder="Digite a senha antiga" />
              </div>
              <div className="individualField">
                <p>Senha nova</p>
                <input placeholder="Digite a senha nova" />
              </div>
              <div className="button">
                <p>Mudar</p>
              </div>
            </div>
          </ChangeContainer>
        </GeneralContainer>
      </Container>
    );
  }
}
