import React, { Component } from "react";
import "./main.css";

export default class MainComponent extends Component {
  render() {
    return (
      <div class="grid-container-alter">
        <div class="info-box">
          <div class="icon">
            <i class="fa fa-download fa-3x" />
          </div>
          <div class="content">
            <p>APP-DOWNLOAD</p>
            <h2>1692</h2>
          </div>
        </div>
        <div class="info-box">
          <div class="icon">
            <i class="fa fa-users fa-3x" />
          </div>
          <div class="content">
            <p>USERS</p>
            <h2>1065</h2>
          </div>
        </div>
        <div class="info-box">
          <div class="icon">
            <i class="fa fa-file-text fa-3x" />
          </div>
          <div class="content">
            <p>SCHEMES</p>
            <h2>75</h2>
          </div>
        </div>
        <div class="info-box">
          <div class="icon">
            <i class="fa fa-check-square-o fa-3x" />
          </div>
          <div class="content">
            <p>APPLIEDSCHEMES</p>
            <h2>45</h2>
          </div>
        </div>
        <div class="info-box">
          <div class="icon">
            <i class="fa fa-university fa-3x" />
          </div>
          <div class="content">
            <p>DEPARTMENTS</p>
            <h2>32</h2>
          </div>
        </div>
      </div>
    );
  }
}

// inside the return div doesnot work comment lines

// <div className="App">
//   <header className="App-header">
//     <h1 className="App-title">Welcome to Coding Town India Pvt</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
