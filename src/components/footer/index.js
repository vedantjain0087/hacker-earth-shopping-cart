import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <div className="footer">
            <span>Made with <FontAwesomeIcon icon={faHeart} className="icon" /> by <span>Vedant Jain</span></span>
        </div>
    );
}
export default Footer;