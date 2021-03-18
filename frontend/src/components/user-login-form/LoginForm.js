import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";
import SubmitButton from "../forms/SubmitButton";

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.submitCallback}>
      <NamedText name="Username" />
      <NamedText name="Password" type="password" />
      <SubmitButton name="Login" />
    </Form>
  );
};

export default LoginForm;
