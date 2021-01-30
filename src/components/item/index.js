import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

function Item() {
    return (
        <div className="item">
            <div className="item__icon-wrapper">
                <FontAwesomeIcon icon={faFileImage} className="icon" />
            </div>
            <div className="item__item-name">
                Item 1
            </div>
            <div className="item__close ml-auto">
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
        </div>
    );
}
export default Item;
