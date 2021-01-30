import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Cart from "./components/cart";
import Total from "./components/total"
function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} className="app-title">
            <span className="app-title__icon-wrapper">
                <FontAwesomeIcon icon={faAngleLeft} className="icon" />
            </span>
            <span className="app-title__title">Order Summary</span>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8}>
          <Cart></Cart>
        </Col>
        <Col sm={12} md={4}>
          <Total></Total>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
