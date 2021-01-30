import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../context/itemContext";

function Total() {
    const { getTotalQuantity, getTotalDiscount, getTotalAmount } = useContext(ItemContext);
    const [totalQuantity, setQuantity] = useState(getTotalQuantity());
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotal] = useState(0);
    useEffect(() => {
        setQuantity((prevQty) => getTotalQuantity());
        setDiscount((prevDiscount) => getTotalDiscount());
        setTotal((prevTotal) => getTotalAmount());
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
