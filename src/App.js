import React, { Component } from 'react';
import './App.css';
import MenuManager from './components/menu/MenuManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <header className="App-header">
            <h1 className="App-title">Pack 4 Gaspee Plateau</h1>
            <img src="/images/pack-logo.png" className="packlogo" alt="logo" />
          </header>
          <div className="menu-manager">
            <MenuManager ></MenuManager>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
