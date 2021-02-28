import React from "react";
import isEmail from "validator/lib/isEmail";

import EmailGroup from "./EmailGroup";

class EmailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", repeatedEmail: "" };
  }

  onEmailChange = (event) => {
    console.log("email: " + event.target.value);
    console.log("isEmail: " + isEmail(event.target.value));
    if (isEmail(event.target.value)) {
      this.setState({ email: event.target.value });
    }
  };

  onRepeatedEmailChange = (event) => {
    console.log("repeated email: " + event.target.value);
  };

  render() {
    console.log("render EmailContainer with email: " + this.state.email);
    return (
      <EmailGroup emailChangeCallback={this.onEmailChange} repeatedEmailChangeCallback={this.onRepeatedEmailChange} />
    );
  }
}

export default EmailContainer;
