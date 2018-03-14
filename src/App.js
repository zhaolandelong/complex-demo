import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MobxDemo, MobxDemoVM } from './components/MobxDemo';
import NativeDemo from './components/NativeDemo';
import ReduxDemo from './components/ReduxDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Demos Below:</h1>
        <div className="App-demo">
          <ol>
            <li>
              <NativeDemo />
            </li>
            <li>
              <MobxDemo vm={new MobxDemoVM()} />
            </li>
            <li>
              <ReduxDemo />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
