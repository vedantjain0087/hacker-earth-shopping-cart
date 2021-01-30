import React, { useContext } from "react";
import { ItemContext } from "../../context/itemContext";

function Total() {
    const [cartItems, setCartItems] = useContext(ItemContext);
    
    return (
        <div className="total mx-auto">
            <h2 className="total__title">Total</h2>
            <ul className="total__billing">
                <li>
                    <div>
                        <span>Items ({cartItems.length})</span>
                        <span>:</span>
                    </div>
                    <div>$138.00</div>
                </li>
                <li>
                    <div>
                        <span>Discount</span>
                        <span>:</span>
                    </div>
                    <div>-$3.00</div>
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
                <div>$125.00</div>
            </div>
        </div>
    );
}
export default Total;
