import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./mainpage/Main";

class App extends Component {
  onClick() {
    alert("Hai guys see you");
  }
  render() {
    const name = this.props.name,
      year = this.props.year;
    return (
      <a>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">
            {name}-
            {year}
          </h2>
        </header>
        <MainComponent />
        <div onClick={this.onClick}>Click me</div>
      </a>
    );
  }
  // render() {
  //   const ctname = this.props.name,
  //     ctyear = this.props.year;
  //   return (
  //     <h2>
  //       {ctname}-
  //       {ctyear}
  //       <div onClick={this.onClick}>Click me</div>
  //     </h2>
  //   );
  // }
}

// const isTypeString = React.PropTypes.string.isRe

export default App;
