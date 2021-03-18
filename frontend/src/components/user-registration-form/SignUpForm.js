import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";
import SubmitButton from "../forms/SubmitButton";

import EmailContainer from "./EmailContainer";
import PasswordContainer from "./PasswordContainer";

const SignUpForm = (props) => {
  return (
    <Form onSubmit={props.submitCallback}>
      <NamedText name="Username" textChangeCallback={props.usernameChangeCallback} />
      <EmailContainer emailChangeCallback={props.emailChangeCallback} />
      <PasswordContainer passwordChangeCallback={props.passwordChangeCallback} />
      <SubmitButton name="Sign up" />
    </Form>
  );
};

export default SignUpForm;
