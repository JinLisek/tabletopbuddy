import React from "react";

import PasswordGroup from "./PasswordGroup";

class PasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "", repeatedPassword: "" };
  }

  onPasswordChange = (event) => {
    console.log("password: " + event.target.value);

    this.props.passwordChangeCallback(event);
  };

  onRepeatedPasswordChange = (event) => {
    console.log("repeated password: " + event.target.value);
  };

  render() {
    return (
      <PasswordGroup
        passwordChangeCallback={this.onPasswordChange}
        repeatedPasswordChangeCallback={this.onRepeatedPasswordChange}
      />
    );
  }
}

export default PasswordContainer;
