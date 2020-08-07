import React, { Component } from "react";
import fire from "../config/fire";
import Login from "./login";
import { Redirect } from "react-router-dom";

class Loginsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
      <div className="App">
        {this.state.user ? <Redirect to="/loggedin" /> : <Login />}
      </div>
    );
  }
}

export default Loginsite;
