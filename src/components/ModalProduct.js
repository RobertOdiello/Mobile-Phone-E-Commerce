import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <Styles>
                <Container>
                  <Row>
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : $ {price}</h5>

                      <Link to="/">
                        <Button className="button" onClick={() => closeModal()}>
                          Continue Shopping
                        </Button>
                      </Link>

                      <Link to="/cart">
                        <Button
                          cart
                          className="button"
                          onClick={() => closeModal()}
                        >
                          Go to Cart
                        </Button>
                      </Link>
                    </div>
                  </Row>
                </Container>
              </Styles>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const Styles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }

  .button {
    text-transform: capitalize;
    background: transparent;
    border: solid var(--lightBlue);
    border-color: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lighBlue)")};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: ${prop =>
        prop.cart ? "var(--mainYellow)" : "var(--lighBlue)"};
      color: var(--mainDark);
    }

    &:focus {
      outline: none;
    }
  }
`;

export default ModalProduct;
