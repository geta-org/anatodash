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

import { ThemeBox } from "./styles";

// Images imports
import AddButton from "../../assets/plus.png";
import Magnifier from "../../assets/magnifier.png";
import Pencil from "../../assets/pencil.png";
import Piece from "../../assets/piece.png";
import CloseButton from "../../assets/xMark2.png";

export default class Libraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: []
        };
        this.getThemes();
    }

    chooseImage = () => {
        var wind = window.open("asda", "Escolha a imagem");
        if (wind.closed) {
            console.log("buceta");
        }
    };

    getThemes = async () => {
        try {
            const themes = await api.get("/theme");
            this.setState({
                themes: themes.data
            });
        } catch (response) {
            console.log(response);
        }
    };

    renderThemes() {
        //return this.state.themes.map(theme =>());
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
                <ListGeneral style={{ width: "30%" }}>
                    <ListContainer>
                        <h1>Biblioteca</h1>
                        <SearchBox>
                            <img alt="" src={Magnifier} />
                            <input placeholder="Digite o nome do tema" />
                        </SearchBox>
                        <ListWrapper>
                            <ThemeBox>
                                <div className="textBox">
                                    <p>Peça</p>
                                </div>
                                <div className="imageBox">
                                    <img
                                        src={
                                            "http://167.71.92.203/anatogame/api/files/69a2f5ff282114f465b04edda96ea28b.jpeg"
                                        }
                                    />
                                </div>
                            </ThemeBox>
                        </ListWrapper>
                    </ListContainer>
                    <ButtonContainer>
                        <img src={AddButton} alt="" />
                    </ButtonContainer>
                </ListGeneral>
            </Container>
        );
    }
}
