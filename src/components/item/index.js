import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ItemContext } from "../../context/itemContext";

function Item ({name, id}) {
    const { removeCartItem } = useContext(ItemContext);
    /**
     * remove an item from cart
     */
    const removeItem = () => {
        removeCartItem(id);
    }
    return (
        <div className="item">
            {/* default icon */}
            <div className="item__icon-wrapper">
                <FontAwesomeIcon icon={faFileImage} className="icon" />
            </div>
            {/* name of the item */}
            <div className="item__item-name">
                {name}
            </div>
            {/* cross icon to remove item */}
            <div className="item__close ml-auto" onClick={removeItem}>
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
        </div>
    );
}
export default Item;
