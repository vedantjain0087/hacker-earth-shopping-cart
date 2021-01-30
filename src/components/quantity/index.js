import React, {useState, useEffect, useContext} from "react";
import { ItemContext } from "../../context/itemContext";

function Quantity({quantity, id}) {
    const { changeQuantity } = useContext(ItemContext);
    const [actualQty, setQuantity] = useState(quantity);
    const handleChange = (e) => {
        setQuantity((qty) => e.target.value ? e.target.value : 0);
    }
    useEffect(() => {
        changeQuantity(id, actualQty)
    }, [actualQty]);

    const decrementQuantity = () => {
        setQuantity((previousQty) => previousQty <= 1 ? 0 : previousQty - 1);
    }
    const incrementQuantity = () => {
        setQuantity((previousQty) => previousQty + 1);
    }
    return (
        <div className="quantity">
            <div className="quantity__action reset-button" onClick={decrementQuantity}>
                <span className="decrement">-</span>
            </div>
            <div className="quantity__count">
                <input type="tel" value={actualQty} onChange={handleChange} />
            </div>
            <div className="quantity__action" onClick={incrementQuantity}>
                <span className="increment">+</span>
            </div>
        </div>
    );
}
export default Quantity;
