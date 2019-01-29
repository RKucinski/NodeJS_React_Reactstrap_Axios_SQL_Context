import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import Menu from "./Navbar";
import Filmcard from "./Filmcard";
import { withContext } from "../context/appcontext";
// import PropTypes from "prop-types";

class FilmlistwithPag extends Component {
  constructor() {
    super();
    this.state = {
      filter: "*",
      currentPage: 1,
      moviesPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
    this.renderPageNumbers = this.renderPageNumbers.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  renderMovies(array) {
    console.log(typeof array);
    console.log(array);

    const mov = Array.from(array);
    console.log(mov);

    mov.map((movie, index) => <Filmcard key={index} movie={movie} />);
  }

  renderPageNumbers(array) {
    console.log(typeof array);
    array.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });
  }

  render() {
    const movies = this.props.appData;
    console.log(movies);
    const { currentPage, moviesPerPage } = this.state;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentmovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    console.log(currentmovies);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers);

    return (
      <React.Fragment>
        <Menu />
        <div className="container">
          <h1>Check the movies by genre :</h1>
          <CardDeck>
            {currentmovies.map((movie, index) => (
              <Filmcard key={index} movie={movie} />
            ))}
          </CardDeck>
          <ul id="page-numbers">
            {pageNumbers.map(number => {
              return (
                <li key={number} id={number} onClick={this.handleClick}>
                  {number}
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

// FilmlistwithPag.propTypes = {
//   currentmovies: PropTypes.array
// };

export default withContext(FilmlistwithPag);
