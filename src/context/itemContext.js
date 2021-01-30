import React, { useState, createContext } from "react";
import {staticCartItems} from "../data";
const ItemContext = createContext();
function ItemProvider(props) {
    console.log(staticCartItems)
    const [cartItems, setCartItems] = useState(staticCartItems);
    return (
        <ItemContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}
export {ItemContext, ItemProvider};
