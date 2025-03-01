import React, {Fragment, useContext, useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import Item from "../item";
import Quantity from "../quantity";
import Price from "../price";
import NullState from "../null_state"
import { ItemContext } from "../../context/itemContext";

function Cart() {
    const {cartItems, getTotalQuantity} = useContext(ItemContext);
    const [totalQty, setTotalQty] = useState(getTotalQuantity());
    useEffect(() => {
        setTotalQty((preQty) => getTotalQuantity())
    })
    return (
        <Fragment>
            {/* header for items lists */}
            <Row className="cart__header">
                <Col xs={6} sm={6} className="text-items">Items ({totalQty})</Col>
                <Col xs={3} sm={3} className="text-items text-center">Qty</Col>
                <Col xs={3} sm={3} className="text-items text-center">Price</Col>
            </Row>
            {/* if cart is not empty then show the details else show null state */}
            {cartItems.length ? cartItems.map((item) => {
                return (
                    <Row key={item.id}>
                        <Col xs={6} sm={6} className="mb-4">
                            {/* Item card for each item */}
                            <Item key={item.id} name={item.name} id={item.id}></Item>
                        </Col>
                        <Col xs={3} sm={3} className="px-0">
                            {/* Quantity bar with increment and decrement butons */}
                            <Quantity key={item.id} quantity={item.quantity} id={item.id}></Quantity>
                        </Col>
                        <Col xs={3} sm={3} className="pl-0">
                            {/* Price display of every item */}
                            <Price key={item.id} price={item.price}></Price>
                        </Col>
                    </Row>
                );
            }) : <NullState></NullState>}
        </Fragment>
    );
}
export default Cart;
