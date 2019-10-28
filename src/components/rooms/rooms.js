import React, { Component } from "react";

import {
    Container,
    RoomsGeneral,
    RoomsContainer,
    ButtonContainer,
    SearchBox,
    RoomWrapper,
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
import xMark from "../../assets/xMark.png";
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
            isByTeacher: true,
            seconds: 0,
            imageIsUploaded: false,
            isByText: false,
            alternatives: ["a", "b", "c", "d", null],
            answer: "",
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
            isEditing: true
        };
    }

    handleByTeacher = event => {
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

    handleByAlternative = event => {
        const isByText = this.state.isByText;
        if (isByText) {
            this.setState({
                isByText: false
            });
        } else {
            this.setState({
                isByText: true
            });
        }
    };

    handleEditing = () => {
        const _isEditing = this.state.isEditing;
        if (_isEditing) {
            this.setState({ isEditing: false });
        } else {
            this.setState({ isEditing: true });
        }
    };

    handleSeconds = e => {
        this.setState({
            seconds: e.target.value
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

    alternativeBox = (alt1, alt2, alt3, alt4, rightAlt) => {
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
                        <RoomWrapper>
                            <RoomBox>
                                <img alt="" src={Check} />
                                <RoomProps>
                                    <h1>Sala #31ANSD</h1>
                                    <p>Criado em 20 de outubro de 2019</p>
                                    <div>
                                        <img alt="Alunos" src={Users} />
                                        <p>32 alunos</p>
                                        <img alt="Questões" src={Question} />
                                        <p>12 questões</p>
                                    </div>
                                </RoomProps>
                            </RoomBox>
                            <img alt="" src={Pencil} />
                        </RoomWrapper>
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
                                <h1>Sala Turma do Pagode</h1>
                                <p>Criado em 27 de outubro de 2019</p>
                            </IndividualRoomHeader>
                            <IndividualRoomBody>
                                <form>
                                    <h2>Nome da sala</h2>
                                    <input placeholder="Turma do pagode" />
                                </form>
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
                                                value={this.state.email}
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
                                                    <button>
                                                        Suba uma foto.
                                                    </button>
                                                    <button>
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
                                                    {this.state.isByText
                                                        ? null
                                                        : this.alternativeBox(
                                                              "a",
                                                              "b",
                                                              "c",
                                                              "d",
                                                              "b"
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
                    <IndividualRoomGeneral />
                )}
            </Container>
        );
    }
}
