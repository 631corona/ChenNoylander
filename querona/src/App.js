import React from 'react';
import { Navbar } from 'react-bootstrap';
import queronaText from './queronaText.svg';
import queronaLogo from './queronaLogo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={queronaLogo} className="d-inline-block" id="logo"/>
          <img src={queronaText} className="d-inline-block" id="text"/>
        </Navbar.Brand>
      </Navbar>
      <header className="App-header">
        <img src={queronaLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
