import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-around items-center text-xl font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md">
            <div>
                <Link to={"/"}> Home </Link>
            </div>
            <div>
                <Link to={"/dashboard"}> Dashboard </Link>
            </div>
            <div>
                <Link to={"/auth/login"}> Login </Link>
            </div>
            <div>
                <Link to={"/auth/register"}> Register </Link>
            </div>
        </nav>
    )
}
