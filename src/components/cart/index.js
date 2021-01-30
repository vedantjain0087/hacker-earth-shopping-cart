import React, {Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../item";
import Quantity from "../quantity";
import Price from "../price";

function Cart() {
    return (
        <Fragment>
            <Row className="cart__header">
                <Col xs={6} sm={6} className="text-items">Items(7)</Col>
                <Col xs={4} sm={4} className="text-items text-center">Qty</Col>
                <Col xs={2} sm={2} className="text-items text-center">Price</Col>
            </Row>
            <Row>
            <Col xs={6} sm={6} className="mb-4">
                <Item></Item>
            </Col>
            <Col xs={4} sm={4} className="px-0">
                <Quantity></Quantity>
            </Col>
            <Col xs={2} sm={2}>
                <Price></Price>
            </Col>
            </Row>
        </Fragment>
    );
}
export default Cart;
