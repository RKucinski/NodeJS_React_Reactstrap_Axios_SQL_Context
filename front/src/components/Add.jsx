import React, { Component } from "react";
import Menu from "./Navbar";
import AddForm from "./AddForm";

class Add extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="container">
          <h1>Want to add a new movie ? Please do it !</h1>
          <AddForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
