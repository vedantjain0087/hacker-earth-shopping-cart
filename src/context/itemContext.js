import React, { useState, createContext, useEffect } from "react";
import {staticCartItems} from "../data";
import { localStorageKey } from "../constants";
const ItemContext = createContext();
function ItemProvider(props) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || staticCartItems);
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(cartItems))
    })
    return (
        <ItemContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}
export {ItemContext, ItemProvider};
