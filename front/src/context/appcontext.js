/* eslint-disable */

import React, { Component, createContext } from "react";
import Axios from "axios";

export const AppContext = createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: []
    };
    this.getMovies();
  }

  shuffle = array => {
    let ctr = array.length;
    let temp;
    let index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  };

  getMovies = () => {
    Axios.get("/api/films/list").then(response => {
      this.setState({
        appData: this.shuffle(response.data)
      });
    });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Component => props => (
  <AppContext.Consumer>
    {value => <Component {...props} {...value} />}
  </AppContext.Consumer>
);
