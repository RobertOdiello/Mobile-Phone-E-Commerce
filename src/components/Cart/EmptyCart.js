import React from "react";
import Title from "../Title";
import { Container, Row } from "react-bootstrap";

export default function EmptyCart() {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-10 mx-auto text-center text-title">
            <Title name="your cart is currently empty" title="" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
