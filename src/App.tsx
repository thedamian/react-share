import React from 'react';
import logo from './logo.svg';
import './App.css';
import Share from "./components/Share"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Share description={"this is a basic share page"}/>
        <a href="https://github.com/bocacode/react-share"  className="App-link" target="_blank">Github Repo</a>
      </header>
    </div>
  );
}

export default App;