import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";
import SubmitButton from "../forms/SubmitButton";

import EmailContainer from "./EmailContainer";

const SignUpForm = (props) => {
  return (
    <Form onSubmit={props.submitCallback}>
      <NamedText name="Username" textChangeCallback={props.usernameChangeCallback} />
      <EmailContainer emailChangeCallback={props.emailChangeCallback} />
      <NamedText name="Password" textChangeCallback={props.passwordChangeCallback} type="password" />
      <NamedText name="Repeat password" textChangeCallback={props.repeatedPasswordChangeCallback} type="password" />
      <SubmitButton name="Sign up" />
    </Form>
  );
};

export default SignUpForm;
