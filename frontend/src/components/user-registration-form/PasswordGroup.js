import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";

const PasswordGroup = (props) => {
  return (
    <Form.Group controlId={"formPasswordGroup"}>
      <NamedText name="Password" textChangeCallback={props.passwordChangeCallback} type="password" />
      <NamedText name="Repeat password" textChangeCallback={props.repeatedPasswordChangeCallback} type="password" />
    </Form.Group>
  );
};

export default PasswordGroup;
