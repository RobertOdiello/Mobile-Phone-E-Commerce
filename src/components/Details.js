import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <Styles>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <Container>
                {/**Title */}
                <Row>
                  <div className="col-10 mx-auto text-center text-salnted text-blue my-5">
                    <h2>{title}</h2>
                  </div>
                </Row>
                {/** End Title */}

                {/** Product Information */}
                <Row>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/** Product Text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Product Info:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/** Buttons */}
                    <Link to="/">
                      <Button className="button">Back to products</Button>
                    </Link>

                    <Button
                      cart
                      className="button"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add To Cart"}
                    </Button>
                  </div>
                </Row>
              </Container>
            );
          }}
        </ProductConsumer>
      </Styles>
    );
  }
}

const Styles = styled.div`
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

export default Details;
