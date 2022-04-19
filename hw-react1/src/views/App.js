import React from "react";
import "../styles/App.scss";
import About from "../Page/About";
import Home from "../Page/Home";
export default class App extends React.Component {
  state = {
    currentPage: "home",
  };

  handleSwitchPage(e, name) {
    e.preventDefault();
    this.setState({
      currentPage: name,
    });
  }

  render() {
    return (
      <div className="App">
        <ul className="listPage">
          <li>
            <a href="." onClick={(e) => this.handleSwitchPage(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="." onClick={(e) => this.handleSwitchPage(e, "about")}>
              About
            </a>
          </li>
        </ul>
        {this.state.currentPage === "home" ? <Home /> : <About />}
      </div>
    );
  }
}
