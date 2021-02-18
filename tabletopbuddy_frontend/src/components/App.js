import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./Home";
import NewGameSessionContainer from "./add-game-session-form/NewGameSessionContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add_game_session">Add Game Session</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/add_game_session" component={NewGameSessionContainer}></Route>
      </Switch>
    </div>
  );
};

export default App;
