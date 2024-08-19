import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex justify-around items-center text-xl font font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md z-10">
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/"} className="hover-underline"> Home </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard"} className="hover-underline"> Dashboard </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard/product"} className="hover-underline"> Product </Link>
            </div>
            <div className="flex justify-center items-center w-[250px]">
                <Link to={"/dashboard/create"} className="hover-underline"> Create </Link>
            </div>
        </nav>
    )
}
