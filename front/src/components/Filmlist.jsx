import React, { Component } from "react";
import Axios from "axios";
import { CardDeck, Row, Col } from "reactstrap";
import Menu from "./Navbar";
import Filmcard from "./Filmcard";
import DropdownCustom from "./Dropdown";
import { withContext } from "../context/appcontext";
import "../App.css";
// import PropTypes from "prop-types";

class Filmlist extends Component {
  constructor() {
    super();
    this.state = {
      filterGenre: "none"
    };
    this.filterGenreFct = this.filterGenreFct.bind(this);
  }

  filterGenreFct = event => {
    this.setState({
      filterGenre: event.target.value
    });
    console.log(event);
    console.log("Test");
  };

  render() {
    const movies = this.props.appData;
    const { filterGenre } = this.state;

    return (
      <React.Fragment>
        <Menu />
        <div className="container">
          <h1>Check the movies by genre :</h1>
          <DropdownCustom message={"Genre"} filterGenre={this.filterGenreFct} />
          <CardDeck className="container">
            <Row>
              {movies
                .filter(function(item) {
                  if (filterGenre === "none" || item.genre === filterGenre) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((movie, index) => (
                  <Col key={index} lg="4" sm="6">
                    <Filmcard key={index} movie={movie} className="filmcard" />
                  </Col>
                ))}
            </Row>
          </CardDeck>
        </div>
      </React.Fragment>
    );
  }
}

// Filmlist.propTypes = {
//   currentmovies: PropTypes.array
// };

export default withContext(Filmlist);
