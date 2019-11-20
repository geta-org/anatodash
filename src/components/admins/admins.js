//Libs Imports
import React, { Component } from "react";
import api from "../../services/api";

//Styles
import {
  Container,
  ListGeneral,
  ListContainer,
  ButtonContainer,
  SearchBox,
  ListWrapper
} from "../../styles/global";

import { AdminsObject, BlankContainer, CreateContainer } from "./styles";

// Images imports
import AddButton from "../../assets/plus.png";
import Magnifier from "../../assets/magnifier.png";
import Pencil from "../../assets/pencil.png";
import CloseButton from "../../assets/xMark2.png";

export default class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      isAdmin: false,
      isCreating: false
    };
    this.getAdmins();
  }

  getAdmins = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const { data } = await api.get("/user?role=admin", config);
      console.log(data);
      this.setState({
        admins: data
      });
    } catch (response) {
      console.log(response);
    }
  };

  renderAdmins() {
    return this.state.admins.map(admin => (
      <AdminsObject key={admin.id}>
        <p>{admin.name}</p>
        <p style={{ fontSize: "15px" }}>{admin.email}</p>
      </AdminsObject>
    ));
  }

  renderCreateBox() {
    return <CreateContainer>adasdas</CreateContainer>;
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
        <ListGeneral style={{ width: "50%" }}>
          <ListContainer>
            <h1>Administradores</h1>
            <SearchBox>
              <img alt="" src={Magnifier} />
              <input placeholder="Digite o nome do usuário" />
            </SearchBox>
            <ListWrapper>{this.renderAdmins()}</ListWrapper>
          </ListContainer>
          <ButtonContainer>
            <img src={AddButton} alt="" />
          </ButtonContainer>
        </ListGeneral>
        <BlankContainer>{this.renderCreateBox()}</BlankContainer>
      </Container>
    );
  }
}
