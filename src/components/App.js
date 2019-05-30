import React, { Component } from "react";
import "./App.css";
import Contacts from "./forms/Contacts";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Address from "./forms/Address";
import Category from "./forms/Category";
import Success from "./forms/Success";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="form">
          <form>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route path="/address" component={Address} />
              <Route path="/category" component={Category} />
              <Route path="/success" component={Success} />
            </Switch>
          </form>
        </div>
      </Router>
    );
  }
}

export default App;
