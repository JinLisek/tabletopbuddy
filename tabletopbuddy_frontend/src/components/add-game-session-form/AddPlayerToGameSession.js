import React from "react";
import { Form, Button } from "react-bootstrap";

class AddPlayerToGameSession extends React.Component {
  constructor(props) {
    super(props);
    this.nameOfAddedPlayer = React.createRef("");
  }

  handleClickAddPlayer = () => {
    if (this.nameOfAddedPlayer.current.value === "") return;

    this.props.addPlayerCallback(this.nameOfAddedPlayer.current.value);
    this.nameOfAddedPlayer.current.value = "";
  };

  render = () => {
    return (
      <Form.Group controlId="formAddPlayer">
        <Form.Label>Player name</Form.Label>
        <Form.Control type="text" ref={this.nameOfAddedPlayer} placeholder="Enter player name" />
        <Button variant="primary" onClick={this.handleClickAddPlayer}>
          Add Player
        </Button>
      </Form.Group>
    );
  };
}

export default AddPlayerToGameSession;
