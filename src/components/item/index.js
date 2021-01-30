import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { store } from 'react-notifications-component';
import { ItemContext } from "../../context/itemContext";

function Item ({name, id}) {
    const [cartItems, setCartItems] = useContext(ItemContext);
    const removeItem = () => {
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
