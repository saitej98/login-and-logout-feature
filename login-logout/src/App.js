import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/LogIn";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
      <AboutApp />
    </div>
  );
}

export default App;
