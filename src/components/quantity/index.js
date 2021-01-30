import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

function Quantity() {
    return (
        <div className="quantity">
            <div className="quantity__action reset-button">
                <span className="decrement">-</span>
            </div>
            <div className="quantity__count">
                <input type="tel" value="1" />
            </div>
            <div className="quantity__action">
                <span className="increment">+</span>
            </div>
        </div>
    );
}
export default Quantity;
