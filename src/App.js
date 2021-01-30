import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { ItemProvider } from "./context/itemContext";
import Cart from "./components/cart";
import Total from "./components/total"
export default function App() {
  return (
      <ItemProvider>
        {/* Notificatio component */}
        <ReactNotification />
        {/* grey header */}
        <nav></nav>
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
            <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} lg={{span: 8, order: 1}}>
              {/* cart component that shows list of items */}
              <Cart></Cart>
            </Col>
            <Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} lg={{span: 4, order: 2}} className="mb-4">
              {/* total component that shows total price and discount summary */}
              <Total></Total>
            </Col>
          </Row>
        </Container>
      </ItemProvider>
  );
}
