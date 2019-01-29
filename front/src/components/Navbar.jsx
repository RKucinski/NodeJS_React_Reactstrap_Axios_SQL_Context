import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import home from "../assets/homepage.png";
import filmlist from "../assets/clapperboard.png";
import addfilm from "../assets/add.png";
import search from "../assets/search.png";

const Menu = ({ path }) => (
  <Navbar className="fixed-adapt">
    <div className="bloc">
      <Nav className="fs" navbar justified>
        <NavItem className={path === "/home" ? "active" : ""}>
          <NavLink className="nav-link" to="/home">
            <img className="navBarIco" src={home} alt="Home" />
          </NavLink>
        </NavItem>
        <NavItem className={path === "/filmlist" ? "active" : ""}>
          <NavLink className="nav-link" to="/filmlist">
            <img className="navBarIco" src={filmlist} alt="List of films" />
          </NavLink>
        </NavItem>
        <NavItem className={path === "/addfilm" ? "active" : ""}>
          <NavLink className="nav-link" to="/addfilm">
            <img className="navBarIco" src={addfilm} alt="Add a film" />
          </NavLink>
        </NavItem>
        <NavItem className={path === "/search" ? "active" : ""}>
          <NavLink className="nav-link" to="/search">
            <img className="navBarIco" src={search} alt="Search" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default Menu;
