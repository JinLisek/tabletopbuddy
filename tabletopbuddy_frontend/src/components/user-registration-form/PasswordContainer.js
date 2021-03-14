import React from "react";

import PasswordGroup from "./PasswordGroup";

class PasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "", repeatedPassword: "" };
  }

  updateParentWithPassword = () => {
    this.props.passwordChangeCallback({ password: this.state.password, repeatedPassword: this.state.repeatedPassword });
  };

  onPasswordChange = (stateKey) => (event) => {
    this.setState(() => {
      return { [stateKey]: event.target.value };
    }, this.updateParentWithPassword);
  };

  render() {
    return (
      <PasswordGroup
        passwordChangeCallback={this.onPasswordChange("password")}
        repeatedPasswordChangeCallback={this.onPasswordChange("repeatedPassword")}
      />
    );
  }
}

export default PasswordContainer;
