import React from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import SignUpForm from "./SignUpForm";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", repeatedPassword: "" };
  }

  validate = () => {
    return true;
  };

  calculateIssuesWithPassword = () => {
    const errors = [];
    if (this.state.password === undefined) errors.push("Password value is undefined!");
    if (this.state.password === null) errors.push("Password value is null!");
    if (this.state.password === "") errors.push("Password is empty!");
    if (this.state.password !== this.state.repeatedPassword) errors.push("Passwords do not match!");

    return errors;
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("sign up clicked");
    const passwordErrors = this.calculateIssuesWithPassword();
    if (passwordErrors.length > 0) {
      alert("FRONTEND ERRORS:\n" + passwordErrors.join("\n"));
      return;
    }
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
            const errors = err.response.data.errors;
            let serverErrors = "SERVER ERRORS:\n";
            if (errors.username) serverErrors += "\n" + errors.username.join("\n");
            if (errors.email) serverErrors += "\n" + errors.email.join("\n");
            if (errors.password) serverErrors += "\n" + errors.password.join("\n");
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

  onPasswordChange = ({ password, repeatedPassword }) => {
    console.log("password: " + password + ", repeatedPassword: " + repeatedPassword);
    this.setState({ password: password, repeatedPassword: repeatedPassword });
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
