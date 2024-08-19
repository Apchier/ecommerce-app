import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-around items-center text-xl font font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md">
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/"}> Home </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard"}> Dashboard </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard/product"}> Product </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard/create"}> Create </Link>
            </div>
        </nav>
    )
}
