import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./components/Home";
import AddPlay from "./components/AddPlay";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addplay">Add Play</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/addplay" component={AddPlay}></Route>
      </Switch>
    </div>
  );
};

export default App;
