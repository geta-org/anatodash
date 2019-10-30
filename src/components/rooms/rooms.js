import React, { Component } from "react";

import {
    Container,
    RoomsGeneral,
    RoomsContainer,
    ButtonContainer,
    SearchBox,
    RoomWrapper,
    RoomContainer,
    RoomBox,
    IndividualRoomGeneral,
    RoomProps,
    IndividualCloseColumn,
    IndividualRoomContainer,
    IndividualRoomHeader,
    IndividualRoomBody,
    IndividualRoomQuestionsContainer,
    ButtonsRow,
    IndividualRoomQuestionsGroup,
    ButtonsQuestions,
    IndividualRoomQuestions
} from "./styles";

import Switch from "@material-ui/core/Switch";

import AddButton from "../../assets/plus.png";
import Pencil from "../../assets/pencil.png";
import Magnifier from "../../assets/magnifier.png";
import Check from "../../assets/check.png";
import CheckQ from "../../assets/check-mark.png";
import Piece from "../../assets/piece.png";
import Pending from "../../assets/pending.png";
import Plus from "../../assets/plusQ.png";
import xMarkQ from "../../assets/xMarkQ.png";
import CloseButton from "../../assets/xMark2.png";
import Users from "../../assets/users.png";
import Question from "../../assets/question.png";
import Save from "../../assets/save.png";
import Delete from "../../assets/delete.png";

export default class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    roomTitle: "31ANSD",
                    createdAt: "29-10-2019",
                    isPending: false
                },
                {
                    roomTitle: "32asdas",
                    createdAt: "29-10-2019",
                    isPending: false
                },
                {
                    roomTitle: "abacaxi",
                    createdAt: "29-10-2019",
                    isPending: true
                }
            ],
            isByTeacher: true,
            seconds: 0,
            imageIsUploaded: false,
            isByText: false,
            alternatives: ["a", "b", "c", "d", null],
            selectedRoom: {},
            answer: "",
            isActivated: false,
            population: 0,
            questions: [
                {
                    id: "1",
                    title: "",
                    alternatives: [],
                    answer: "",
                    isByText: false,
                    imageIsUploaded: false
                }
            ],
            isEditing: false
        };
    }

    handleByTeacher = () => {
        const isByTeacher = this.state.isByTeacher;
        if (isByTeacher) {
            this.setState({
                isByTeacher: false
            });
        } else {
            this.setState({
                isByTeacher: true
            });
        }
    };

    handleByAlternative = () => {
        const isByText = this.state.isByText;
        if (isByText) {
            this.setState({
                isByText: false,
                answer: null
            });
        } else {
            this.setState({
                isByText: true,
                question: null
            });
        }
    };

    handleEditing = room => {
        const _isEditing = this.state.isEditing;
        if (_isEditing) {
            this.setState({ isEditing: false, selectedRoom: null });
        } else {
            this.setState({ isEditing: true, selectedRoom: room });
        }
    };

    handleSeconds = e => {
        this.setState({
            seconds: e.target.value
        });
    };

    handleAnswer = e => {
        this.setState({
            answer: e.target.value
        });
    };

    handleAlternative = (e, number) => {
        const array = [...this.state.alternatives];
        array[number] = e.target.value;
        this.setState(
            {
                alternatives: array
            },
            () => {
                console.log(this.state.alternatives);
            }
        );
    };

    handleRightAlternative = e => {
        const array = [...this.state.alternatives];
        if (array[4] === array[e]) {
            array[4] = null;
            this.setState(
                {
                    alternatives: array
                },
                () => {
                    console.log(this.state.alternatives);
                }
            );
        } else {
            array[4] = array[e];
            this.setState(
                {
                    alternatives: array
                },
                () => {
                    console.log(this.state.alternatives);
                }
            );
        }
    };

    renderRooms = () => {
        moment.locale("pt-BR");
        let _formatedDate = this.state.rooms[0].createdAt;
        console.log(_formatedDate);
        _formatedDate = moment().format("LLL");
        console.log(_formatedDate);
        return this.state.rooms.map(_room => (
            <RoomContainer key={_room.roomTitle}>
                <RoomBox>
                    {this.state.isPending ? (
                        <img alt="" src={Pending} />
                    ) : (
                        <img alt="" src={Check} />
                    )}
                    <RoomProps>
                        <h1>Sala {_room.roomTitle}</h1>
                        <p>Criado {this.state.createdAt}</p>
                        <div>
                            <img alt="Alunos" src={Users} />
                            <p>32 alunos</p>
                            <img alt="Questões" src={Question} />
                            <p>12 questões</p>
                        </div>
                    </RoomProps>
                </RoomBox>
                <img
                    alt=""
                    onClick={() => this.handleEditing(_room)}
                    src={Pencil}
                />
            </RoomContainer>
        ));
    };

    alternativeBox = (alt1, alt2, alt3, alt4) => {
        return (
            <div className="alternativeGroup">
                <div className="alternativeContainer">
                    {this.state.alternatives[4] ===
                    this.state.alternatives[0] ? (
                        <img
                            onClick={() => this.handleRightAlternative(0)}
                            className="rightCheck"
                            alt=""
                            src={CheckQ}
                        />
                    ) : (
                        <img
                            onClick={() => this.handleRightAlternative(0)}
                            className="wrongCheck"
                            alt=""
                            src={CheckQ}
                        />
                    )}
                    <p>({alt1}).</p>
                    <input
                        type="text"
                        value={this.state.alternatives[0]}
                        onChange={e => this.handleAlternative(e, 0)}
                        placeholder="Digite a alternativa"
                    />
                </div>
                <div className="alternativeContainer">
                    {this.state.alternatives[4] ===
                    this.state.alternatives[1] ? (
                        <img
                            onClick={() => this.handleRightAlternative(1)}
                            className="rightCheck"
                            alt=""
                            src={CheckQ}
                        />
                    ) : (
                        <img
                            onClick={() => this.handleRightAlternative(1)}
                            className="wrongCheck"
                            alt=""
                            src={CheckQ}
                        />
                    )}
                    <p>({alt2}).</p>
                    <input
                        type="text"
                        value={this.state.alternatives[1]}
                        onChange={e => this.handleAlternative(e, 1)}
                        placeholder="Digite a alternativa"
                    />
                </div>
                <div className="alternativeContainer">
                    {this.state.alternatives[4] ===
                    this.state.alternatives[2] ? (
                        <img
                            onClick={() => this.handleRightAlternative(2)}
                            className="rightCheck"
                            alt=""
                            src={CheckQ}
                        />
                    ) : (
                        <img
                            onClick={() => this.handleRightAlternative(2)}
                            className="wrongCheck"
                            alt=""
                            src={CheckQ}
                        />
                    )}
                    <p>({alt3}).</p>
                    <input
                        type="text"
                        value={this.state.alternatives[2]}
                        onChange={e => this.handleAlternative(e, 2)}
                        placeholder="Digite a alternativa"
                    />
                </div>
                <div className="alternativeContainer">
                    {this.state.alternatives[4] ===
                    this.state.alternatives[3] ? (
                        <img
                            onClick={() => this.handleRightAlternative(3)}
                            className="rightCheck"
                            alt=""
                            src={CheckQ}
                        />
                    ) : (
                        <img
                            onClick={() => this.handleRightAlternative(3)}
                            className="wrongCheck"
                            alt=""
                            src={CheckQ}
                        />
                    )}
                    <p>({alt4}).</p>
                    <input
                        type="text"
                        value={this.state.alternatives[3]}
                        onChange={e => this.handleAlternative(e, 3)}
                        placeholder="Digite a alternativa"
                    />
                </div>
            </div>
        );
    };

    chooseImage = () => {
        var wind = window.open("asda", "Escolha a imagem");
        wind.closed(console.log("asda"));
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
                        <h1>Salas</h1>
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
                {this.state.isEditing ? (
                    <IndividualRoomGeneral>
                        <IndividualCloseColumn>
                            <img
                                onClick={this.handleEditing}
                                alt=""
                                src={CloseButton}
                            />
                        </IndividualCloseColumn>
                        <IndividualRoomContainer>
                            <IndividualRoomHeader>
                                <h1>
                                    Sala #{this.state.selectedRoom.roomTitle}
                                </h1>
                                <p>
                                    Criado em{" "}
                                    {this.state.selectedRoom.createdAt}
                                </p>
                            </IndividualRoomHeader>
                            <IndividualRoomBody>
                                <div className="status">
                                    <h2>Status</h2>
                                    {this.state.selectedRoom.isPending ? (
                                        <p className="pending">Pendente.</p>
                                    ) : (
                                        <p className="done">Concluído.</p>
                                    )}
                                </div>
                                <div>
                                    <h2>Encerramento</h2>
                                    <div>
                                        <p>Professor</p>
                                        <Switch
                                            checked={this.state.isByTeacher}
                                            value="isByTeacher"
                                            color="default"
                                            onClick={this.handleByTeacher}
                                        />
                                        <p>Por tempo</p>
                                        <form>
                                            <input
                                                type="text"
                                                value={this.state.seconds}
                                                onChange={this.handleSeconds}
                                                placeholder="0"
                                                onClick={() => {
                                                    if (
                                                        !this.state.isByTeacher
                                                    ) {
                                                        this.setState({
                                                            isByTeacher: true
                                                        });
                                                    }
                                                }}
                                            />
                                        </form>
                                        <p>segundos</p>
                                    </div>
                                </div>
                            </IndividualRoomBody>
                            <IndividualRoomQuestionsContainer>
                                <h1>Questões</h1>
                                <IndividualRoomQuestionsGroup>
                                    <button className="questionSlider">
                                        {"<"}
                                    </button>
                                    <IndividualRoomQuestions>
                                        <div className="title">
                                            <h1>1.</h1>
                                            <form>
                                                <textarea
                                                    type="text"
                                                    placeholder="Insira o titulo da questão"
                                                />
                                            </form>
                                        </div>
                                        <div className="body">
                                            {this.state.imageIsUploaded ? (
                                                <div className="optionsImage">
                                                    <img alt="" src={Piece} />
                                                </div>
                                            ) : (
                                                <div className="optionsImage">
                                                    <button
                                                        onClick={
                                                            this.chooseImage
                                                        }
                                                    >
                                                        Escolha da biblioteca.
                                                    </button>
                                                </div>
                                            )}
                                            <div className="answerContainer">
                                                <div className="answerOptions">
                                                    <p>Alternativa</p>
                                                    <Switch
                                                        checked={
                                                            this.state.isByText
                                                        }
                                                        value="isByText"
                                                        color="default"
                                                        onClick={
                                                            this
                                                                .handleByAlternative
                                                        }
                                                    />
                                                    <p>Texto</p>
                                                </div>
                                                <div className="answerGroup">
                                                    {this.state.isByText ? (
                                                        <form className="answerField">
                                                            <input
                                                                type="text"
                                                                value={
                                                                    this.state
                                                                        .answer
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleAnswer
                                                                }
                                                                placeholder="Insira a resposta da questão"
                                                            />
                                                        </form>
                                                    ) : (
                                                        this.alternativeBox(
                                                            "a",
                                                            "b",
                                                            "c",
                                                            "d"
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </IndividualRoomQuestions>
                                    <button className="questionSlider">
                                        {">"}
                                    </button>
                                    <ButtonsQuestions>
                                        <img src={Plus} alt="" />
                                        <img src={xMarkQ} alt="" />
                                    </ButtonsQuestions>
                                </IndividualRoomQuestionsGroup>
                                <ButtonsRow>
                                    <img alt="Salvar" src={Save} />
                                    <img alt="Deletar" src={Delete} />
                                </ButtonsRow>
                            </IndividualRoomQuestionsContainer>
                        </IndividualRoomContainer>
                    </IndividualRoomGeneral>
                ) : (
                    <IndividualRoomGeneral style={{ background: "none" }} />
                )}
            </Container>
        );
    }
}
