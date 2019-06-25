import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HealthPage from "./pages/HealthPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/health" component={HealthPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
