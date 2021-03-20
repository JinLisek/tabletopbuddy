import React from "react";

import LoginForm from "./LoginForm";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "" };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Login clicked");
  };

  render() {
    console.log("LoginContainer render with username: " + this.state.username);
    return <LoginForm submitCallback={this.onSubmit} />;
  }
}

export default LoginContainer;
