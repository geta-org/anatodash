//Libs Imports
import React, { Component } from "react";
import api from "../../services/api";

//Styles
import {
  Container,
  ListGeneral,
  ListContainer,
  SearchBox,
  ListWrapper
} from "../../styles/global";

import {
  UsersObject,
  BlankContainer,
  EditContainer,
  ContainerTexts,
  ContainerButtons
} from "./styles";

// Images imports
import Magnifier from "../../assets/magnifier.png";
import CloseButton from "../../assets/xMark2.png";

export default class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAdmin: false,
      selectedUser: [],
      searchInput: ""
    };
    this.getUsers();
  }

  getUsers = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      const { data } = await api.get("/user", config);
      console.log(data);
      this.setState({
        users: data
      });
    } catch (response) {
      console.log(response);
    }
  };

  renderUsers() {
    let { users, searchInput } = this.state;
    searchInput = searchInput.trim().toLowerCase();

    if (searchInput.length > 0) {
      users = users.filter(user => {
        return user.email.toLowerCase().match(searchInput);
      });
    }

    return users.map(user => {
      if (user.role === "admin") {
        return (
          <UsersObject
            style={{ backgroundColor: "#FFA927" }}
            key={user.id}
            onClick={() => this.handleEdit(user)}
          >
            <p>{user.name}</p>
            <p style={{ fontSize: "15px" }}>{user.email}</p>
          </UsersObject>
        );
      } else {
        return (
          <UsersObject key={user.id} onClick={() => this.handleEdit(user)}>
            <p>{user.name}</p>
            <p style={{ fontSize: "15px" }}>{user.email}</p>
          </UsersObject>
        );
      }
    });
  }

  handleEdit = user => {
    console.log(this.state.selectedUser);
    if (this.state.selectedUser.length !== 0) {
      this.setState({
        selectedUser: []
      });
    } else {
      this.setState({
        selectedUser: user
      });
    }
  };

  handleSearch = e => {
    this.setState(
      {
        searchInput: e.target.value
      },
      () => this.renderUsers(this.state.searchInput)
    );
  };

  promoteUser = async user => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      await api.put(
        "/roles/" + user.id,
        {
          role: "admin"
        },
        config
      );
      console.log("User promoted.");
      alert("Parabéns, você conseguiu se promover este usuário;)");
      window.location.reload(false);
    } catch (response) {
      console.log(response.message);
      alert("Infelizmente, você não conseguiu promover este usuário :(");
    }
  };

  demoteUser = async user => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    try {
      await api.put(
        "/roles/" + user.id,
        {
          role: "teacher"
        },
        config
      );
      alert("Parabéns, você conseguiu se rebaixar este usuário;)");
      console.log("User demoted.");
      window.location.reload(false);
    } catch (response) {
      console.log(response);
      alert("Infelizmente, você não conseguiu rebaixar este usuário :(");
    }
  };

  renderEditBox = user => {
    return (
      <EditContainer>
        <img alt="" src={CloseButton} onClick={this.handleEdit} />
        <ContainerTexts>
          <div className="CreationField">
            <p className="TextProps">E-mail</p>
            <p className="TextData">{user.email}</p>
          </div>
          <div className="CreationField">
            <p className="TextProps">Nome</p>
            <p className="TextData">{user.name}</p>
          </div>
          <div className="CreationField">
            <p className="TextProps">Papel</p>
            <p className="TextData">
              {user.role === "admin" ? "Administrador" : "Professor"}
            </p>
          </div>
        </ContainerTexts>
        <ContainerButtons>
          {user.role === "admin" ? (
            <div
              className="Buttons"
              style={{ backgroundColor: "#8A0101" }}
              onClick={() => this.demoteUser(user)}
            >
              Rebaixar
            </div>
          ) : null}
          {user.role === "teacher" ? (
            <div
              className="Buttons"
              style={{ backgroundColor: "#FFA927" }}
              onClick={() => this.promoteUser(user)}
            >
              Promover
            </div>
          ) : null}
        </ContainerButtons>
      </EditContainer>
    );
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
        <ListGeneral style={{ width: "40%" }}>
          <ListContainer>
            <h1>Administradores</h1>
            <SearchBox>
              <img alt="" src={Magnifier} />
              <input
                placeholder="Digite o e-mail que deseja procurar"
                onChange={this.handleSearch}
                value={this.state.searchInput}
              />
            </SearchBox>
            <ListWrapper>{this.renderUsers(null)}</ListWrapper>
          </ListContainer>
        </ListGeneral>
        <BlankContainer>
          {this.state.selectedUser.length !== 0
            ? this.renderEditBox(this.state.selectedUser)
            : null}
        </BlankContainer>
        <ContainerButtons></ContainerButtons>
      </Container>
    );
  }
}
