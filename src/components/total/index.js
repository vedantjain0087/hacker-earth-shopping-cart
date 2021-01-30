import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../context/itemContext";

function Total() {
    const [cartItems, setCartItems] = useContext(ItemContext);
    const [totalQuantity, setQuantity] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotal] = useState(0);
    useEffect(() => {
        let newDiscount = 0;
        let newTotal = 0;
        let newQuantity = 0;
        cartItems.forEach((item) => {
            if (item.discount) {
                newDiscount += item.discount * item.quantity; 
            }
            if (item.price) {
                newTotal += item.price * item.quantity; 
            }
            if (item.quantity) {
                newQuantity += item.quantity; 
            }
        });
        setQuantity((prevQuantity) => newQuantity);
        setDiscount((prevDiscount) => newDiscount);
        setTotal((prevTotal) => newTotal);
    })
    return (
        <div className="total mx-auto">
            <h2 className="total__title">Total</h2>
            <ul className="total__billing">
                <li>
                    <div>
                        <span>Items ({totalQuantity})</span>
                        <span>:</span>
                    </div>
                    <div>${totalAmount}</div>
                </li>
                <li>
                    <div>
                        <span>Discount</span>
                        <span>:</span>
                    </div>
                    <div>-${discount}</div>
                </li>
                <li>
                    <div>
                        <span>Type discount</span>
                        <span>:</span>
                    </div>
                    <div>-$10.00</div>
                </li>
            </ul>
            <div className="total__footer">
                <div>Order total</div>
                <div>${totalAmount - discount}</div>
            </div>
        </div>
    );
}
export default Total;
