import React, { useState, createContext, useEffect } from "react";
import { store } from 'react-notifications-component';
import {staticCartItems} from "../data";
import { localStorageKey } from "../constants";
const ItemContext = createContext();
function ItemProvider(props) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || staticCartItems);
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(cartItems))
    })
    const changeQuantity = (id, actualQty) => {
        actualQty = actualQty ? actualQty : 0;
        setCartItems((items) => items.map((item) => {
            if (item.id === id) {
                item.quantity = actualQty;
            }
            return item;
        }));
    }
    const getTotalQuantity = () => {
        let qty = 0;
        cartItems.forEach((item) => {
            qty += parseInt(item.quantity);
        });
        return qty;
    }
    const getTotalDiscount = () => {
        let totalDisc = 0
        cartItems.forEach((item) => {
            if (item.discount) {
                totalDisc += parseInt(item.discount * item.quantity);
            }
        });
        return totalDisc
    }
    const getTotalAmount = () => {
        let totalAmt = 0
        cartItems.forEach((item) => {
            if (item.price) {
                totalAmt += parseInt(item.price * item.quantity);
            }
        });
        return totalAmt;
    }
    const removeCartItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
        store.addNotification({
            title: "Deleted",
            message: "Item deleted from cart",
            type: "warning",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000
            }
          });
    }
    const resetCart = () => {
        setCartItems(() => staticCartItems);
    }
    const defaultContext = {
        cartItems,
        getTotalQuantity,
        removeCartItem,
        resetCart,
        changeQuantity,
        getTotalDiscount,
        getTotalAmount
    }
    return (
        <ItemContext.Provider value={defaultContext}>
            {props.children}
        </ItemContext.Provider>
    );
}
export {ItemContext, ItemProvider};
