import React, { Component } from "react";
import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styles>
        <Navbar sticky="top" expand="lg" variant="dark" bg="primary">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} alt="store"></img>
                <span className="ml-2">Mark's Shoes</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-5">
                <Nav.Item>
                  <Link to="/" className="products">
                    Products
                  </Link>
                </Nav.Item>
              </Nav>

              <Nav className="ml-auto">
                <Nav.Item>
                  <Link to="/cart">
                    <Button className="button">
                      <i className="fas fa-cart-plus"></i>
                      <span className="ml-2">cart</span>
                    </Button>
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    );
  }
}

const Styles = styled.div`
  .button {
    text-transform: capitalize;
    background: transparent;
    border: solid var(--mainWhite);
    color: var(--mainWhite);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: var(--mainWhite);
      color: var(--mainDark);
    }

    &:focus {
      outline: none;
    }
  }
  .products {
    color: var(--mainWhite);

    &:hover {
      color: var(--mainDark);
      text-decoration: none;
    }
  }
`;

export default NavigationBar;
