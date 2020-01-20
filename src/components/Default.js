import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class Default extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-10 mx-auto text0ecnter text-title text-uppercase pt-5">
              <h1 className="display-3"> 404 </h1>
              <h1>error</h1>
              <h2>page not found</h2>
              <h3>
                the requested URL{" "}
                <span className="text-danger">
                  {this.props.location.pathname}
                </span>{" "}
                was not found
              </h3>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
