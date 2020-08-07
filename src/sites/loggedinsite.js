import React, { Component } from "react";
import fire from "../config/fire";
import { Redirect } from "react-router-dom";
import "./loggedin.css";

class logginsite extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
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
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="loggedwrapper">
        {!this.state.user && <Redirect to="/login" />}
        <h1>Welcome Home! </h1>
        <button className="logout" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default logginsite;
