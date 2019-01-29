import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Filmlist from "./components/Filmlist";
import Add from "./components/Add";
import Search from "./components/Search";
import ContextProvider from "./context/appcontext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <ContextProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/filmlist" component={Filmlist} />
              <Route exact path="/addfilm" component={Add} />
              <Route exact path="/search" component={Search} />
            </ContextProvider>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
