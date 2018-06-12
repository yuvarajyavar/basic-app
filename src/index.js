// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
// import MainComponent from "./mainpage/Main";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
//file path name ./mainpage/Main (./ is must important)
// Main class name

// ReactDOM.render(<Main />, document.getElementById("root"));
ReactDOM.render(
  <App name="Welcome to Coding Town India Pvt" year={2016} />,
  document.getElementById("root")
); // <Main/> it must be closed
//last render only called
