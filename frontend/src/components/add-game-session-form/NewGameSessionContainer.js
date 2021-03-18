import React from "react";
import axios from "axios";

import NewGameSessionForm from "./NewGameSessionForm";

class NewGameSessionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameName: null, players: [] };
    this.playerToBeAddedName = "";
  }

  validate = () => {
    return this.state.gameName !== null && this.state.players.length > 0;
  };

  addPlayToDatabase = (event) => {
    event.preventDefault();
    if (this.validate()) {
      const req = {
        game_name: this.state.gameName,
        players: this.state.players,
      };
      axios.post("http://192.168.1.165:8000/game_sessions/", req).then((resp) => {
        console.log(resp);
      });
    } else {
      alert("VALIDATION FAILED");
    }
  };

  handleChangeGameName = (event) => {
    this.setState({ gameName: event.target.value });
  };

  handleAddPlayer = (playerName) => {
    this.setState((state, _) => {
      const newPlayers = [...state.players, playerName];
      return { players: newPlayers };
    });
  };

  render() {
    return (
      <NewGameSessionForm
        submitCallback={this.addPlayToDatabase}
        gameNameChangeCallback={this.handleChangeGameName}
        addPlayerCallback={this.handleAddPlayer}
        players={this.state.players}
      />
    );
  }
}

export default NewGameSessionContainer;
