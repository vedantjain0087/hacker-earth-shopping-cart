import React, {useState, useEffect, useContext} from "react";
import { ItemContext } from "../../context/itemContext";

function Quantity({quantity, id}) {
    const { changeQuantity } = useContext(ItemContext);
    const [actualQty, setQuantity] = useState(quantity);
    /**
     * change the value of the quantity in input field
     * @param {Object} e event argument
     */
    const handleChange = (e) => {
        let newQty = e.target.value;
        setQuantity((qty) => {
            if (isNaN(newQty)) return qty;
            // if value is invalid then set it to 0
            return newQty  < 0 ? 0 : newQty;
        });
    }
    /**
     * change the total quantity count of the cart items
     */
    useEffect(() => {
        changeQuantity(id, actualQty)
    }, [actualQty]);
    /**
     * decrement the quantity
     */
    const decrementQuantity = () => {
        setQuantity((previousQty) => previousQty <= 1 ? 0 : parseInt(previousQty) - 1);
    }
    /**
     * increment the quantity
     */
    const incrementQuantity = () => {
        setQuantity((previousQty) => parseInt(previousQty) + 1);
    }
    return (
        <div className="quantity">
            {/* decrement the quantity of an item */}
            <div className="quantity__action" onClick={decrementQuantity}>
                <span className="decrement">-</span>
            </div>
            {/* display the current quantity of an item */}
            <div className="quantity__count">
                <input type="tel" value={actualQty} onChange={handleChange} />
            </div>
            {/* increment the quantity of an item */}
            <div className="quantity__action" onClick={incrementQuantity}>
                <span className="increment">+</span>
            </div>
        </div>
    );
}
export default Quantity;
