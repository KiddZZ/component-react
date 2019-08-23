import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Dfs from "./demo/dfs";
import Mobx from "./demo-mobx";
import NewDemo from "./demo-new";
import ExtendsDemo from "./demo-extends-component";
import HOCDemo from "./demo-HOC";
import ReduxDemo from "./demo-redux";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dfs" component={Dfs} />
            <Route exact path="/mobx" component={Mobx} />
            <Route exact path="/new" component={NewDemo} />
            <Route exact path="/extends" component={ExtendsDemo} />
            <Route exact path="/hoc" component={HOCDemo} />
            <Route exact path="/redux" component={ReduxDemo} />
          </Switch>
        </Router>
      </div>
    );
  }
}
