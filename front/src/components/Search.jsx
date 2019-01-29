import React, { Component } from "react";
import Menu from "./Navbar";
import { withContext } from "../context/appcontext";
import Filmcard from "./Filmcard";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    const { appData } = this.props;
    console.log(appData);

    let filteredMovie = appData.filter(movie => {
      return (
        movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <React.Fragment>
        <Menu />

        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {filteredMovie.map((item, index) => {
          return <Filmcard key={index} movie={item} className="filmcard" />;
        })}
      </React.Fragment>
    );
  }
}

export default withContext(Search);
