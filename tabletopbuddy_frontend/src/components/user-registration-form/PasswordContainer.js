import React from "react";

import PasswordGroup from "./PasswordGroup";

class PasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "", repeatedPassword: "" };
  }

  validatePassword = () => {
    return this.state.password.length > 0;
  };

  updateParentWhenPasswordsMatch = () => {
    if (!this.validatePassword()) {
      console.log("PASSWORD MUST HAVE AT LEAST 1 CHARACTER");
      return;
    }

    if (this.state.password !== this.state.repeatedPassword) {
      console.log("PASSWORDS DO NOT MATCH!");
      return;
    }

    //DZIALA NIEPOPRAWNIE GDY UDA SIE USTAWIC HASLO W PARENCIE, A POZNIEJ UZYTKOWNIK ZMIENI HASLO NA ZLE/NIE MATCHUJACE SIE - redux?
    this.props.passwordChangeCallback(this.state.password);
  };

  onPasswordChange = (stateKey) => (event) => {
    console.log(stateKey + " " + event.target.value);
    this.setState(() => {
      return { [stateKey]: event.target.value };
    }, this.updateParentWhenPasswordsMatch);
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
