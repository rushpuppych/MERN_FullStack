import React, { Component } from 'react';
import logo from '../../assets/images/webapp/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>app/containers/App/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
