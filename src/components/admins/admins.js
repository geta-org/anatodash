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

import { AdminsList, AdminsObject, BlankContainer } from "./styles";

// Images imports
import AddButton from "../../assets/plus.png";
import Magnifier from "../../assets/magnifier.png";
import Pencil from "../../assets/pencil.png";
import CloseButton from "../../assets/xMark2.png";
import PicExample from "../../assets/picexample.png";

export default class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      isAdmin: false,
      isEditing: false,
      isSelected: false
    };
    this.getAdmins();
  }

  getAdmins = async () => {
    try {
      const { data } = await api.get("/user?role=admin");
      console.log(data.admins);
      this.setState({
        admins: data.admins
      });
    } catch (response) {
      console.log(response);
    } finally {
      console.log(this.state.admins);
    }
  };

  renderAdmins() {}

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
            {/* <ListWrapper>{this.renderAdmins()}</ListWrapper> */}
            <ListWrapper>
              <AdminsObject>
                <img alt="" src={PicExample} />
                <p>Donquixote</p>
              </AdminsObject>
            </ListWrapper>
          </ListContainer>
          <ButtonContainer>
            <img src={AddButton} alt="" />
          </ButtonContainer>
        </ListGeneral>
        <BlankContainer style={{ backgroundColor: "whitesmoke" }} />
      </Container>
    );
  }
}
