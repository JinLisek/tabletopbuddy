import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";

const EmailGroup = (props) => {
  return (
    <Form.Group controlId={"formEmailGroup"}>
      <NamedText name="E-mail" textChangeCallback={props.emailChangeCallback} />
      <NamedText name="Repeat e-mail" textChangeCallback={props.repeatedEmailChangeCallback} />
    </Form.Group>
  );
};

export default EmailGroup;
