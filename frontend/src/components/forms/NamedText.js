import { Form } from "react-bootstrap";

const NamedText = (props) => {
  return (
    <Form.Group controlId={"form" + props.name}>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type={props.type} onChange={props.textChangeCallback} />
    </Form.Group>
  );
};

NamedText.defaultProps = {
  type: "text",
};

export default NamedText;
