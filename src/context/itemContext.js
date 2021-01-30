import React, { useState, createContext, useEffect } from "react";
import { store } from 'react-notifications-component';
import {staticCartItems} from "../data";
import { localStorageKey, FICTION, TYPE_DISCOUNT, POPUP } from "../constants";
const ItemContext = createContext();
function ItemProvider(props) {
    // if data exists in localStorage then retrieve it else use static data
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || staticCartItems);
    
    // update localStorage with the latest cart data
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(cartItems))
    });

    /**
     * convert given number to a 2 decimal place floating number
     * @param {number} number given number
     */
    const convertToDecimal = (number) => {
        return number.toFixed(2);
    }
    /**
     * update the quantity of a item
     * @param { number } id 
     * @param { nymber } actualQty 
     */
    const changeQuantity = (id, actualQty) => {
        actualQty = actualQty ? actualQty : 0;
        setCartItems((items) => items.map((item) => {
            if (item.id === id) {
                item.quantity = actualQty;
            }
            return item;
        }));
    }
    /**
     * return total quantity of all items present in cart
     */
    const getTotalQuantity = () => {
        let qty = 0;
        cartItems.forEach((item) => {
            qty += parseInt(item.quantity);
        });
        return qty;
    }
    /**
     * returns total discount amount for all items in cart
     */
    const getTotalDiscount = () => {
        let totalDisc = 0;
        cartItems.forEach((item) => {
            if (item.discount) {
                totalDisc += parseInt(item.discount * item.quantity);
            }
        });
        return convertToDecimal(totalDisc);
    }
    /**
     * return the total price amount of all items in cart
     */
    const getTotalAmount = () => {
        let totalAmt = 0;
        cartItems.forEach((item) => {
            if (item.price) {
                totalAmt += parseInt(item.price * item.quantity);
            }
        });
        return convertToDecimal(totalAmt);
    }
    /**
     * return total TYPE DISCOUNT for items with type fiction
     */
    const getTypeDiscount = () => {
        let typeDiscount = 0;
        cartItems.forEach((item) => {
            if (item.quantity && item.type === FICTION) {
                typeDiscount += TYPE_DISCOUNT * item.price * item.quantity;
            }
        });
        return convertToDecimal(typeDiscount); 
    }
    /**
     * removes an item from cart and pops a notification
     * @param { number } id 
     */
    const removeCartItem = (id) => {
        const {title, message} = POPUP;
        setCartItems((items) => items.filter((item) => item.id !== id));
        store.addNotification({
            title: title,
            message: message,
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
    /**
     * reset the cart items to the original static data when cart is empty
     */
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
        getTotalAmount,
        getTypeDiscount,
        convertToDecimal
    }
    return (
        <ItemContext.Provider value={defaultContext}>
            {props.children}
        </ItemContext.Provider>
    );
}
export {ItemContext, ItemProvider};
