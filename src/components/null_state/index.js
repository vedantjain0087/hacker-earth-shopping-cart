import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { ItemContext } from "../../context/itemContext";
function NullState () {
    const {resetCart} = useContext(ItemContext);
    return (
        <div className="null-state">
            <p>Oops, It looks like your cart is empty!</p>
            <div className="w-100 text-center">
                <Button size="lg" onClick={resetCart}>Reload Data</Button>
            </div>
        </div>
    );
}
export default NullState;