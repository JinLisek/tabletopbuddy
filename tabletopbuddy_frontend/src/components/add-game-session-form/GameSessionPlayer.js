import { Form, Button } from "react-bootstrap";

const GameSessionPlayer = (props) => {
  return (
    <Form.Group controlId="formAddedPlayer">
      <Form.Label>Player name</Form.Label>
      <Form.Control type="text" placeholder={props.playerName} readOnly />
      <Button variant="primary">Remove</Button>
    </Form.Group>
  );
};

export default GameSessionPlayer;
