import React from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import SignUpForm from "./SignUpForm";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  validate = () => {
    return true;
  };

  onSubmit = (event) => {
    console.log("sign up clicked");
    event.preventDefault();
    if (this.validate()) {
      const req = {
        username: this.state.username,
        email: "blax@gmail.com",
      };
      axios.post("http://192.168.1.165:8000/sign_up/", req).then((resp) => {
        console.log(resp);
      });
    } else {
      alert("VALIDATION FAILED");
    }
  };

  onUsernameChange = (event) => {
    console.log("username: " + event.target.value);
    this.setState({ username: event.target.value });
  };

  onEmailChange = (event) => {
    console.log("e-mail: " + event.target.value);
    console.log("isEmail: " + isEmail(event.target.value));
  };

  onRepeatedEmailChange = (event) => {
    console.log("repeated e-mail: " + event.target.value);
    console.log("isEmail: " + isEmail(event.target.value));
  };

  onPasswordChange = (event) => {
    console.log("password: " + event.target.value);
    console.log("isEmail: " + isEmail(event.target.value));
  };

  onRepeatedPasswordChange = (event) => {
    console.log("repeated password: " + event.target.value);
    console.log("isEmail: " + isEmail(event.target.value));
  };

  render() {
    console.log("SignUpContainer render with username: " + this.state.username);
    return (
      <SignUpForm
        submitCallback={this.onSubmit}
        usernameChangeCallback={this.onUsernameChange}
        emailChangeCallback={this.onEmailChange}
        repeatedEmailChangeCallback={this.onRepeatedEmailChange}
        passwordChangeCallback={this.onPasswordChange}
        repeatedPasswordChangeCallback={this.onRepeatedPasswordChange}
      />
    );
  }
}

export default SignUpContainer;
