//Libs Imports
import React, { Component } from "react";

//Styles
import {
    Container,
    RoomsGeneral,
    RoomsContainer,
    ButtonContainer,
    SearchBox,
    RoomWrapper
} from "./styles";

// Images imports
import AddButton from "../../assets/plus.png";
import Pencil from "../../assets/pencil.png";
import Magnifier from "../../assets/magnifier.png";
import Piece from "../../assets/piece.png";
import CloseButton from "../../assets/xMark2.png";

export default class Libraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [
                {
                    themetitle: ""
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
                        <h1>Bibliotecas</h1>
                        <SearchBox>
                            <img alt="" src={Magnifier} />
                            <input placeholder="Digite o nome da sala" />
                        </SearchBox>
                        <RoomWrapper>{this.renderRooms()}</RoomWrapper>
                    </RoomsContainer>
                    <ButtonContainer>
                        <img src={AddButton} alt="" />
                    </ButtonContainer>
                </RoomsGeneral>
            </Container>
        );
    }
}
