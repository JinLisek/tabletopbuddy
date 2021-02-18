import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddedPlayer = (props) => {
  return (
    <Form.Group controlId="formAddedPlayer">
      <Form.Label>Player name</Form.Label>
      <Form.Control type="text" placeholder={props.playerName} readOnly />
      <Button variant="primary">Remove</Button>
    </Form.Group>
  );
};

class AddGameSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameName: null, players: [] };
    this.playerToBeAddedName = React.createRef("");
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

  handleAddPlayer = (event) => {
    this.setState((state, _) => {
      const newPlayers = [...state.players, this.playerToBeAddedName.current.value];
      this.playerToBeAddedName.current.value = "";
      return { players: newPlayers };
    });
  };

  render = () => {
    return (
      <Form onSubmit={this.addPlayToDatabase}>
        <Form.Group controlId="formGameName">
          <Form.Label>Game name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangeGameName} placeholder="Enter game name" />
        </Form.Group>
        {this.state.players.map((playerName, index) => {
          return <AddedPlayer playerName={playerName} key={index} />;
        })}
        <Form.Group controlId="formAddPlayer">
          <Form.Label>Player name</Form.Label>
          <Form.Control type="text" ref={this.playerToBeAddedName} placeholder="Enter player name" />
          <Button variant="primary" onClick={this.handleAddPlayer}>
            Add Player
          </Button>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add game session
        </Button>
      </Form>
    );
  };
}

export default AddGameSession;
