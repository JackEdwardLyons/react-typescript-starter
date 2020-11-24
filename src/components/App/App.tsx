import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

const Demo = styled.div`
  border: 5px solid gold;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </Demo>
      </header>
    </div>
  );
}

export default App;
