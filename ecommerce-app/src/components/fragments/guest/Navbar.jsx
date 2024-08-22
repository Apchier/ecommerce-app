import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex justify-around items-center text-xl font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md z-10 container">
            <div className="flex justify-center items-center w-[200px] ">
                <Link to={"/"} className="hover-underline"> Home </Link>
            </div>
            <div className="flex justify-center items-center w-[200px] ">
                <Link to={"/shopping-cart"} className="hover-underline"> All Products </Link>
            </div>
            <div className="flex justify-center items-center w-[200px] ">
                <Link to={"/dashboard"} className="hover-underline"> Dashboard </Link>
            </div>
            <div className="flex justify-center items-center w-[200px] ">
                <Link to={"/auth/login"} className="hover-underline"> Login </Link>
            </div>
            <div className="flex justify-center items-center w-[200px] ">
                <Link to={"/auth/register"} className="hover-underline"> Register </Link>
            </div>
        </nav>
    )
}
