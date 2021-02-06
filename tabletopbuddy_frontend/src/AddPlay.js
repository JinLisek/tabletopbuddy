import React from "react";
import { Form, Button } from "react-bootstrap";

class AddPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameName: null, firstPlayer: null, secondPlayer: null, thirdPlayer: null };
  }

  addPlayToDatabase = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log("add to database");
  };

  handleChangeGameName = (event) => {
    this.setState({ gameName: event.target.value });
  };

  handleChangePlayerName = (id) => (event) => {
    if (id === 1) {
      this.setState({ firstPlayer: event.target.value });
    } else if (id === 2) {
      this.setState({ secondPlayer: event.target.value });
    } else if (id === 3) {
      this.setState({ thirdPlayer: event.target.value });
    }
  };

  render = () => {
    return (
      <Form onSubmit={this.addPlayToDatabase}>
        <Form.Group controlId="formGameName">
          <Form.Label>Game name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangeGameName} placeholder="Enter game name" />
        </Form.Group>
        <Form.Group controlId="formFirstPlayerName">
          <Form.Label>First player name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangePlayerName(1)} placeholder="Enter first player name" />
        </Form.Group>
        <Form.Group controlId="formSecondPlayerName">
          <Form.Label>Second second name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangePlayerName(2)} placeholder="Enter second player name" />
        </Form.Group>
        <Form.Group controlId="formThirdPlayerName">
          <Form.Label>Third player name</Form.Label>
          <Form.Control type="text" onChange={this.handleChangePlayerName(3)} placeholder="Enter third player name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add play
        </Button>
      </Form>
    );
  };
}

export default AddPlay;
