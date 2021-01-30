import React, {Fragment, useContext} from "react";
import { Row, Col } from "react-bootstrap";
import Item from "../item";
import Quantity from "../quantity";
import Price from "../price";
import { ItemContext } from "../../context/itemContext";

function Cart() {
    const [cartItems, setCartItems] = useContext(ItemContext);
    return (
        <Fragment>
            <Row className="cart__header">
                <Col xs={6} sm={6} className="text-items">Items({cartItems.length})</Col>
                <Col xs={3} sm={3} className="text-items text-center">Qty</Col>
                <Col xs={3} sm={3} className="text-items text-center">Price</Col>
            </Row>
            {cartItems.map((item) => {
                return (
                    <Row key={item.id}>
                        <Col xs={6} sm={6} className="mb-4">
                            <Item key={item.id} name={item.name} id={item.id}></Item>
                        </Col>
                        <Col xs={3} sm={3} className="px-0">
                            <Quantity key={item.id} quantity={item.quantity} id={item.id}></Quantity>
                        </Col>
                        <Col xs={3} sm={3} className="pl-0">
                            <Price key={item.id} price={item.price}></Price>
                        </Col>
                    </Row>
                );
            })}
        </Fragment>
    );
}
export default Cart;
