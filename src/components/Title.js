import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Title({ name, title }) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} className="text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
              {name}
              <br />
              <strong className="text-blue">{title}</strong>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
