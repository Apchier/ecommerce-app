/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const NavLink = ({ text, href }) => {
    return <Link to={href} className="hover-underline"> {text} </Link>
}

export default NavLink