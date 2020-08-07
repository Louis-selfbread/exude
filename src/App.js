import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";
import Homesite from "./sites/homesite";
import Loginsite from "./sites/loginsite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logginsite from "./sites/loggedinsite";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/loggedin">
              <Logginsite />
            </Route>

            <Route path="/login">
              <Loginsite />
            </Route>

            <Route path="/">
              <Homesite />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
