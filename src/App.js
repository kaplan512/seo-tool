import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Router>
        <div className="page-wrapper">
          <Routes/>
        </div>
      </Router>
    </div>
  );
}

export default App;
