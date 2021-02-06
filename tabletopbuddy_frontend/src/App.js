import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AddPlay from "./AddPlay";

const Home = () => {
  return <h1>HOME</h1>;
};

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
