import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "./ButtonGroup";
import { store } from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <ButtonGroup technologies={["React", "Elm", "React-Redux"]} />
            <p>Current Action: {store.getState().tech}</p>
        </header>
      </div>
    );
  }
}

export default App;
