//Libs Imports
import React, { Component } from "react";
import axios from "axios";

//Styles
import {
    Container,
    RoomsGeneral,
    RoomsContainer,
    ButtonContainer,
    SearchBox,
    RoomWrapper
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

    renderThemes = () => {};

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
                <RoomsGeneral>
                    <RoomsContainer>
                        <h1>Biblioteca</h1>
                        <SearchBox>
                            <img alt="" src={Magnifier} />
                            <input placeholder="Digite o nome do tema" />
                        </SearchBox>
                        <RoomWrapper>{this.renderThemes()}</RoomWrapper>
                    </RoomsContainer>
                    <ButtonContainer>
                        <img src={AddButton} alt="" />
                    </ButtonContainer>
                </RoomsGeneral>
            </Container>
        );
    }
}
