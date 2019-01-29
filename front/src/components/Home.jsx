import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardDeck, Row, Col } from "reactstrap";
import { withContext } from "../context/appcontext";
import Menu from "./Navbar";
import Filmcard from "./Filmcard";

class Home extends Component {
  render() {
    const movies = this.props.appData.slice(0, 3);

    return (
      <React.Fragment>
        <Menu />
        <div className="container">
          <h4>
            You'll find hereby some of our movies. Wanna see more ? Go to the{" "}
            <Link to="/filmlist">filtered</Link> or{" "}
            <Link to="search">search</Link> section
          </h4>
          <CardDeck className="container">
            <Row>
              {movies.map((movie, index) => (
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

export default withContext(Home);
