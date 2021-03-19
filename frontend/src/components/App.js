import { Switch, Route } from "react-router-dom";
import { Navbar, Nav, Figure } from "react-bootstrap";

import Home from "./Home";
import NewGameSessionContainer from "./add-game-session-form/NewGameSessionContainer";
import SignUpContainer from "./user-registration-form/SignUpContainer";
import LoginContainer from "./user-login-form/LoginContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <Figure.Image src="/tabletop-logo.png" width={100} height={100} />
          </Nav.Link>
          <Nav.Link href="/add_game_session">Add Game Session</Nav.Link>
          <Nav.Link href="/sign_up">Sign up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/add_game_session" component={NewGameSessionContainer}></Route>
        <Route exact path="/sign_up" component={SignUpContainer}></Route>
        <Route exact path="/login" component={LoginContainer}></Route>
      </Switch>
    </div>
  );
};

export default App;
