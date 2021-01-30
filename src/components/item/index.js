import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ItemContext } from "../../context/itemContext";

function Item ({name, id}) {
    const [cartItems, setCartItems] = useContext(ItemContext);
    const removeItem = () => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    }
    return (
        <div className="item">
            <div className="item__icon-wrapper">
                <FontAwesomeIcon icon={faFileImage} className="icon" />
            </div>
            <div className="item__item-name">
                {name}
            </div>
            <div className="item__close ml-auto" onClick={removeItem}>
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
        </div>
    );
}
export default Item;
