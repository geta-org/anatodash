//Libs Imports
import React, { Component } from "react";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import api from "../../services/api";

//Styles
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

// Material UI
import Switch from "@material-ui/core/Switch";

// Images imports
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
        /*
        {
          roomTitle: "31ANSD",
          createdAt: "2019-10-29",
          isPending: false,
          isByTime: true,
          isActivated: false,
          students: [],
          seconds: 0,
          questions: [
            {
              id: 0,
              title: "",
              alternatives: ["a1", "b1", "c1", "d1", null],
              answer: "",
              isByText: false,
              imageIsUploaded: false
            },
            {
              id: 1,
              title: "",
              alternatives: ["a21", "ba", "c21", "d21", null],
              answer: "",
              isByText: false,
              imageIsUploaded: false
            }
          ]
        }
       */
      ],
      selectedRoom: {},
      selectedQuestion: {},
      isEditing: false,
      isSelected: false
    };
    this.getRoomsFromApi();
  }

  handleByTime = () => {
    const isByTime = this.state.selectedRoom.isByTime;
    if (isByTime) {
      this.setState({
        selectedRoom: {
          ...this.state.selectedRoom,
          isByTime: false
        }
      });
    } else {
      this.setState({
        selectedRoom: {
          ...this.state.selectedRoom,
          isByTime: true
        }
      });
    }
  };

  handleByAlternative = () => {
    const isByText = this.state.selectedQuestion.isByText;
    if (isByText) {
      this.setState({
        selectedQuestion: {
          ...this.state.selectedQuestion,
          isByText: false
        }
      });
    } else {
      this.setState({
        selectedQuestion: {
          ...this.state.selectedQuestion,
          isByText: true
        }
      });
    }
  };

  handleEditing = room => {
    const _isEditing = this.state.isEditing;
    if (_isEditing) {
      this.setState({
        isEditing: false,
        isSelected: false,
        selectedRoom: null,
        selectedQuestion: null
      });
    } else {
      this.setState({
        isEditing: true,
        isSelected: false,
        selectedRoom: room,
        selectedQuestion: room.questions[0]
      });
    }
  };

  handleSelect = room => {
    const _isSelected = this.state.isSelected;
    if (_isSelected) {
      this.setState({
        isSelected: false,
        isEditing: false,
        selectedRoom: null,
        selectedQuestion: null
      });
    } else {
      this.setState({
        isSelected: true,
        isEditing: false,
        selectedRoom: room
      });
    }
  };

  handleSeconds = e => {
    this.setState({
      selectedQuestion: {
        seconds: e.target.value
      }
    });
  };

  handleAnswer = e => {
    this.setState({
      selectedQuestion: {
        answer: e.target.value
      }
    });
  };

  handleAlternative = (e, number) => {
    const array = [...this.state.selectedQuestion.alternatives];
    array[number] = e.target.value;
    this.setState({
      selectedQuestion: {
        ...this.state.selectedQuestion,
        alternatives: array
      }
    });
  };

  handleRightAlternative = e => {
    const array = [...this.state.selectedQuestion.alternatives];
    if (array[4] === array[e]) {
      array[4] = null;
      this.setState({
        selectedQuestion: {
          ...this.state.selectedQuestion,
          alternatives: array
        }
      });
    } else {
      array[4] = array[e];
      this.setState({
        selectedQuestion: {
          ...this.state.selectedQuestion,
          alternatives: array
        }
      });
    }
  };

  formatDate = _day => {
    const day = parseISO(_day);
    const formatedDate = format(day, "dd 'de' MMMM' de 'yyyy' às 'HH:mm", {
      locale: ptBR
    });
    return formatedDate;
  };

  getRoomsFromApi = async () => {
    try {
      const rooms = await api.get("/room", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      console.log(rooms.data);

      this.setState({
        rooms: rooms.data
      });
      //console.log(rooms);
      //localStorage.getItem("user_id")
    } catch (response) {
      console.log(response);
    } finally {
      console.log(this.state.rooms);
    }
  };

  renderEditableQuestions = () => {
    return (
      <IndividualRoomQuestionsContainer>
        <h1>Questões</h1>
        <IndividualRoomQuestionsGroup>
          <button onClick={this.previousQuestion} className="questionSlider">
            {"<"}
          </button>
          <IndividualRoomQuestions>
            <div className="title">
              <h1>{this.state.selectedQuestion.id}.</h1>
              <form>
                <textarea
                  type="text"
                  placeholder="Insira o titulo da questão"
                  value={this.state.selectedQuestion.title}
                  onChange={this.handleTitle}
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
                  <button onClick={this.chooseImage}>
                    Escolha da biblioteca.
                  </button>
                </div>
              )}
              <div className="answerContainer">
                <div className="answerOptions">
                  <p>Alternativa</p>
                  <Switch
                    checked={this.state.selectedQuestion.isByText}
                    value="isByText"
                    color="default"
                    onClick={this.handleByAlternative}
                  />
                  <p>Texto</p>
                </div>
                <div className="answerGroup">
                  {this.state.selectedQuestion.isByText ? (
                    <form className="answerField">
                      <input
                        type="text"
                        value={this.state.selectedQuestion.answer}
                        onChange={this.handleAnswer}
                        placeholder="Insira a resposta da questão"
                      />
                    </form>
                  ) : (
                    this.alternativeBox("a", "b", "c", "d")
                  )}
                </div>
              </div>
            </div>
          </IndividualRoomQuestions>
          <button onClick={this.nextQuestion} className="questionSlider">
            {">"}
          </button>
          <ButtonsQuestions>
            <img src={Plus} alt="" onClick={this.createQuestion} />
            <img src={xMarkQ} alt="" onClick={this.deleteQuestion} />
          </ButtonsQuestions>
        </IndividualRoomQuestionsGroup>
        <ButtonsRow>
          <img alt="Salvar" src={Save} onClick={this.saveRoom} />
          <img alt="Deletar" src={Delete} onClick={this.deleteRoom} />
        </ButtonsRow>
      </IndividualRoomQuestionsContainer>
    );
  };

  renderRooms = () => {
    return this.state.rooms.map(_room => (
      <RoomContainer key={_room.code}>
        <RoomBox onClick={() => this.handleSelect(_room)}>
          {this.state.isPending ? (
            <img alt="" src={Pending} />
          ) : (
            <img alt="" src={Check} />
          )}
          <RoomProps>
            <h1>Sala {_room.code}</h1>
            <p>Criado {this.formatDate(_room.createdAt)}</p>
            <div>
              <img alt="Alunos" src={Users} />
              <p>32 alunos</p>
              <img alt="Questões" src={Question} />
              <p>12 questões</p>
            </div>
          </RoomProps>
        </RoomBox>
        <img alt="" onClick={() => this.handleEditing(_room)} src={Pencil} />
      </RoomContainer>
    ));
  };

  saveRoom = () => {
    var idQuestion = this.state.selectedQuestion.id;
    const roomToSave = this.state.selectedRoom;
    const questionToSave = this.state.selectedQuestion;
    roomToSave.questions[idQuestion] = questionToSave;

    this.setState({
      selectedRoom: roomToSave
    });
  };

  deleteRoom = () => {
    if (window.confirm("Você tem certeza que deseja deletar esta sala?")) {
      const rooms = this.state.rooms;
      const roomToDelete = this.state.selectedRoom;
      console.log(rooms);
      console.log(roomToDelete);
      var index = rooms.indexOf(roomToDelete);
      rooms.splice(index, 1);
      console.log(index);
      this.setState({
        rooms: rooms,
        selectedRoom: null,
        isEditing: null
      });
    }
  };
  createQuestion = () => {
    const emptyQuestion = {
      id: this.state.selectedRoom.questions.length,
      title: "",
      alternatives: ["", "", "", "", null],
      answer: "",
      isByText: false,
      imageIsUploaded: false
    };
    const questions = this.state.selectedRoom.questions;
    questions.push(emptyQuestion);
    this.setState(
      {
        selectedRoom: {
          ...this.state.selectedRoom,
          questions: questions
        }
      },
      () => this.saveRoom
    );
  };

  deleteQuestion = () => {
    if (window.confirm("Você tem certeza que deseja deletar esta questão?")) {
      const room = this.state.selectedRoom;
      const questionToDelete = this.state.selectedQuestion;
      console.log(room);
      console.log(questionToDelete);
      var index = room.questions.indexOf(questionToDelete);
      room.questions.splice(index, 1);
      console.log(index);
      this.setState(
        {
          selectedQuestion: room.questions[index - 1],
          selectedRoom: room
        },
        () => this.saveRoom
      );
    }
  };

  handleTitle = e => {
    const question = this.state.selectedQuestion;
    question.title = e.target.value;
    console.log(question);
    console.log(e.target.value);
    this.setState({
      selectedQuestion: question
    });
  };

  alternativeBox = (alt1, alt2, alt3, alt4) => {
    return (
      <div className="alternativeGroup">
        <div className="alternativeContainer">
          {this.state.selectedQuestion.alternatives[4] ===
          this.state.selectedQuestion.alternatives[0] ? (
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
            value={this.state.selectedQuestion.alternatives[0]}
            onChange={e => this.handleAlternative(e, 0)}
            placeholder="Digite a alternativa"
          />
        </div>
        <div className="alternativeContainer">
          {this.state.selectedQuestion.alternatives[4] ===
          this.state.selectedQuestion.alternatives[1] ? (
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
            value={this.state.selectedQuestion.alternatives[1]}
            onChange={e => this.handleAlternative(e, 1)}
            placeholder="Digite a alternativa"
          />
        </div>
        <div className="alternativeContainer">
          {this.state.selectedQuestion.alternatives[4] ===
          this.state.selectedQuestion.alternatives[2] ? (
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
            value={this.state.selectedQuestion.alternatives[2]}
            onChange={e => this.handleAlternative(e, 2)}
            placeholder="Digite a alternativa"
          />
        </div>
        <div className="alternativeContainer">
          {this.state.selectedQuestion.alternatives[4] ===
          this.state.selectedQuestion.alternatives[3] ? (
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
            value={this.state.selectedQuestion.alternatives[3]}
            onChange={e => this.handleAlternative(e, 3)}
            placeholder="Digite a alternativa"
          />
        </div>
      </div>
    );
  };

  chooseImage = () => {
    var wind = window.open("asda", "Escolha a imagem");
    if (wind.closed) {
      console.log("buceta");
    }
  };

  nextQuestion = () => {
    const newQuestion_id = this.state.selectedQuestion.id + 1;
    const newQuestion = this.state.selectedRoom.questions[newQuestion_id];
    if (newQuestion) {
      this.saveRoom();
      this.setState({
        selectedQuestion: newQuestion
      });
    }
  };

  previousQuestion = () => {
    const newQuestion_id = this.state.selectedQuestion.id - 1;
    const newQuestion = this.state.selectedRoom.questions[newQuestion_id];
    if (newQuestion) {
      this.saveRoom();
      this.setState({
        selectedQuestion: newQuestion
      });
    }
  };

  renderIndividualEditing = () => {
    return (
      <IndividualRoomGeneral>
        <IndividualCloseColumn>
          <img onClick={this.handleEditing} alt="" src={CloseButton} />
        </IndividualCloseColumn>
        <IndividualRoomContainer>
          <IndividualRoomHeader>
            <h1>Sala #{this.state.selectedRoom.code}</h1>
            <p>{this.formatDate(this.state.selectedRoom.createdAt)}</p>
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
                  checked={this.state.selectedRoom.isByTime}
                  value="isByTime"
                  color="default"
                  onClick={this.handleByTime}
                />
                <p>Por tempo</p>
                <form>
                  <input
                    type="text"
                    value={this.state.selectedRoom.seconds}
                    onChange={this.handleSeconds}
                    placeholder="0"
                    onClick={() => {
                      if (!this.state.selectedRoom.isByTime) {
                        this.setState({
                          isByTime: true
                        });
                      }
                    }}
                  />
                </form>
                <p>segundos</p>
              </div>
            </div>
          </IndividualRoomBody>
          {this.renderEditableQuestions()}
        </IndividualRoomContainer>
      </IndividualRoomGeneral>
    );
  };

  renderNone = () => {
    return <IndividualRoomGeneral style={{ background: "none" }} />;
  };

  renderIndividualSelected = () => {
    return (
      <IndividualRoomGeneral>
        <IndividualCloseColumn>
          <img onClick={this.handleSelect} alt="" src={CloseButton} />
        </IndividualCloseColumn>
        <IndividualRoomContainer>
          <IndividualRoomHeader>
            <h1 style={{ color: "#000000" }}>
              Sala #{this.state.selectedRoom.code}
            </h1>
            <h2>0 pessoas</h2>
          </IndividualRoomHeader>
          <IndividualRoomBody>
            <div className="status">
              <h2 style={{ color: "#000000" }}>Status</h2>
              {this.state.selectedRoom.isPending ? (
                <p className="pending">Pendente.</p>
              ) : (
                <p className="done">Concluído.</p>
              )}
            </div>
          </IndividualRoomBody>
        </IndividualRoomContainer>
      </IndividualRoomGeneral>
    );
  };

  handleRender = () => {
    if (this.state.isEditing) {
      return this.renderIndividualEditing();
    }
    if (this.state.isSelected) {
      return this.renderIndividualSelected();
    }
    if (!this.state.isEditing && !this.state.isSelected) {
      return this.renderNone();
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
        {this.handleRender()}
      </Container>
    );
  }
}
