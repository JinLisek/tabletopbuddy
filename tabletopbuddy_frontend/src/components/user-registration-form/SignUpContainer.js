import React from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import SignUpForm from "./SignUpForm";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
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
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post("http://192.168.1.165:8000/sign_up/", req)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          if (err.response) {
            let serverErrors = "SERVER ERRORS:\n";
            if (err.response.data.errors.username) serverErrors += "\n" + err.response.data.errors.username.join("\n");
            if (err.response.data.errors.email) serverErrors += "\n" + err.response.data.errors.email.join("\n");
            if (err.response.data.errors.password) serverErrors += "\n" + err.response.data.errors.password.join("\n");
            alert(serverErrors);
          }
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
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (password) => {
    console.log("password: " + password);
    this.setState({ password: password });
  };

  render() {
    console.log("SignUpContainer render with username: " + this.state.username);
    return (
      <SignUpForm
        submitCallback={this.onSubmit}
        usernameChangeCallback={this.onUsernameChange}
        emailChangeCallback={this.onEmailChange}
        passwordChangeCallback={this.onPasswordChange}
      />
    );
  }
}

export default SignUpContainer;
