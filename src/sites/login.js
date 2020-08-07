import React, { Component } from "react";
import fire from "../config/fire";
import "./login.css";
import { Link } from "react-router-dom";
import Back from "../images/back.png";
const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class Loginsite extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = initialState;
  }

  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (!this.state.email) {
      emailError = "Email cannot be blank";
    }

    if (!this.state.password) {
      passwordError = "must include password";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  };

  login(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          console.log(u);
        })
        .catch((err) => {
          console.log(err);
        });
      // clear Form
      this.setState(initialState);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  signup(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          console.log(u);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="loginwrapper">
        <Link className="back" to="/">
          <img src={Back} />
        </Link>
        <h1 className="title">Login</h1>
        <div className="login">
          <form>
            <input
              className="inputEmail"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.emailError}{" "}
            </div>

            <input
              className="inputPassword"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />

            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.passwordError}{" "}
            </div>
            <div className="btns">
              <button className="loginbtn" onClick={this.login}>
                Login
              </button>

              <p className="registerbtn" onClick={this.signup}>
                Not registered ? <span>Create an Account</span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginsite;
