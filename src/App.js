import "./App.css";
import React, { Component } from "react";
import Test from "./Test";
import image from "../src/100.jpg";

export default class App extends Component {
  state = {
    fullName: "Attia Ghazi Walid",
    bio: "study in go my code",
    profession: "student",
    show: true,
  };

  visible = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App container">
        <Test />

        {this.state.show ? (
          <div className="affiche">
            <img
              className="rounded mx-auto d-block"
              src={image}
              width={350}
              height={350}
              alt="image de profil"
            ></img>
            <div>
              <h3>{this.state.fullName}</h3>
              <h3>{this.state.bio}</h3>

              <h3>{this.state.profession}</h3>
            </div>
          </div>
        ) : (
          <h3>click button to show state</h3>
        )}
        <button
          onClick={this.visible}
          className="btn btn-primary"
          style={{ marginTop: 10 }}
        >
          {this.state.show ? ` hide state` : ` show state`}
        </button>
      </div>
    );
  }
}
