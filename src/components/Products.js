import React, { Component } from "react";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";
import Title from "./Title";
import { ProductConsumer } from "./Context";

class Products extends Component {
  state = {};

  render() {
    return (
      <div>
        <Title name="our" title="products" />
        <Container>
          <Row>
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
