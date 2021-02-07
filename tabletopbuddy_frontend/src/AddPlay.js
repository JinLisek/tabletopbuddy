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

class AddPlay extends React.Component {
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
      console.log("req: " + req.game_name + " " + req.players[0].name);
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
    console.log(this.playerToBeAddedName.current.value);

    this.setState((state, _) => {
      const newPlayers = [...state.players, { name: this.playerToBeAddedName.current.value }];
      this.playerToBeAddedName.current.value = "";
      return { players: newPlayers };
    });
  };

  render = () => {
    console.log(this.state);
    return (
      <Form onSubmit={this.addPlayToDatabase}>
        <Form.Group controlId="formGameName">
          <Form.Label>Game name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangeGameName} placeholder="Enter game name" />
        </Form.Group>
        {this.state.players.map((player, index) => {
          return <AddedPlayer playerName={player.name} key={index} />;
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

export default AddPlay;
