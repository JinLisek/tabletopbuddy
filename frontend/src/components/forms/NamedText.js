import React from "react";
import { Form } from "react-bootstrap";

const NamedText = ({ type, name, textChangeCallback }) => {
  return (
    <Form.Group controlId={"form" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control type={type} onChange={textChangeCallback} />
    </Form.Group>
  );
};

NamedText.defaultProps = {
  type: "text",
};

export default NamedText;
