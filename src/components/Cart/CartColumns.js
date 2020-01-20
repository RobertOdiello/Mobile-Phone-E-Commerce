import React from "react";
import { Container, Row } from "react-bootstrap";

export default function CartColumns() {
  return (
    <div>
      <Container fluid className="text-center d-none d-lg-block">
        <Row>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">products</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
