import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Health from "./component/Health";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world, let's countdown together.</p>
        <Health />
      </header>
    </div>
  );
}

export default App;
