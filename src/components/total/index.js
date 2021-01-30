import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../context/itemContext";

function Total() {
    const { getTotalQuantity, getTotalDiscount, getTotalAmount, getTypeDiscount, convertToDecimal } = useContext(ItemContext);
    const [totalQuantity, setQuantity] = useState(getTotalQuantity());
    const [discount, setDiscount] = useState(getTotalDiscount());
    const [typeDiscount, setTypeDiscount] = useState(getTypeDiscount());
    const [totalAmount, setTotal] = useState(getTotalAmount());
    useEffect(() => {
        setQuantity((prevQty) => getTotalQuantity()); // set total quantity of items
        setDiscount((prevDiscount) => getTotalDiscount()); // set total discount on items
        setTypeDiscount((prevTypeDiscount) => getTypeDiscount()); // set total TYPE discount on items
        setTotal((prevTotal) => getTotalAmount()); // set total price amount
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
                    <div>{discount != 0 && <span>-</span>}${discount}</div>
                </li>
                <li>
                    <div>
                        <span>Type discount</span>
                        <span>:</span>
                    </div>
                    <div>{typeDiscount != 0 && <span>-</span>}${typeDiscount}</div>
                </li>
            </ul>
            <div className="total__footer">
                <div>Order total</div>
                <div>${convertToDecimal(totalAmount - discount - typeDiscount)}</div>
            </div>
        </div>
    );
}
export default Total;
