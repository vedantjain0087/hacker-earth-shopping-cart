import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { ItemContext } from "../../context/itemContext";
import { staticCartItems } from "../../data";
function NullState () {
    const [cartItems, setCartItems] = useContext(ItemContext);
    const handleClick = () => {
        setCartItems(() => staticCartItems);
    }
    return (
        <div className="null-state">
            <p>Oops, It looks like your cart is empty!</p>
            <div className="w-100 text-center">
                <Button size="lg" onClick={handleClick}>Reload Data</Button>
            </div>
        </div>
    );
}
export default NullState;