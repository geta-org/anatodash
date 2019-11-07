//Libs Imports
import React, { Component } from "react";
//import axios from "axios";
import { listTheme } from "../../services/api";

//Styles
import {
    Container,
    ListGeneral,
    ListContainer,
    ButtonContainer,
    SearchBox,
    ListWrapper
} from "../../styles/global";

import {} from "./styles";

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
            themes: [
                {
                    themetitle: "",
                    themeHex: "#FFFFFF"
                }
            ]
        };
    }

    chooseImage = () => {
        var wind = window.open("asda", "Escolha a imagem");
        if (wind.closed) {
            console.log("buceta");
        }
    };

    renderThemes = () => {
        listTheme();
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
                <ListGeneral style={{ width: "30%" }}>
                    <ListContainer>
                        <h1>Biblioteca</h1>
                        <SearchBox>
                            <img alt="" src={Magnifier} />
                            <input placeholder="Digite o nome do tema" />
                        </SearchBox>
                        <ListWrapper>{this.renderThemes()}</ListWrapper>
                    </ListContainer>
                    <ButtonContainer>
                        <img src={AddButton} alt="" />
                    </ButtonContainer>
                </ListGeneral>
            </Container>
        );
    }
}
