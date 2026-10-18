import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#262626",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        collapseOnSelect
        expand="lg"
        className="navbar"
      >
        <Container>
          {/* start */}
          <Navbar.Brand href="/" className="navbar-brand">
            Macro-Brain-It
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* responsive part */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* middle */}
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/features">
                Features
              </NavLink>
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </Nav>
            {/* end */}
            <Nav>
              <NavLink className="nav-link" to="/deets">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
