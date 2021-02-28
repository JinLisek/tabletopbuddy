import { Form } from "react-bootstrap";

const NamedText = (props) => {
  return (
    <Form.Group controlId={"form" + props.name}>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type="text" onChange={props.textChangeCallback} />
    </Form.Group>
  );
};

export default NamedText;
