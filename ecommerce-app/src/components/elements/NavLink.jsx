/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, href }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link 
            to={href} 
            className={`hover-underline ${isActive ? 'active' : ''}`}
        > 
            {text} 
        </Link>
    );
}

export default NavLink;
