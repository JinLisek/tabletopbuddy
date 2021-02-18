import { Form } from "react-bootstrap";

const GameNameFormGroup = (props) => {
  return (
    <Form.Group controlId="formGameName">
      <Form.Label>Game name</Form.Label>
      <Form.Control type="text" onChange={props.gameNameChangeCallback} placeholder="Enter game name" />
    </Form.Group>
  );
};

export default GameNameFormGroup;
