import { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import NavLink from "../../elements/NavLink";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 flex justify-between items-center text-xl font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md z-10 container">
            <div className="flex justify-start items-center w-full ml-14">
                <div className="flex justify-start items-center w-auto mr-10">
                    <NavLink text={"Dashboard"} href={"/dashboard"} />
                </div>
                <div className="flex justify-start items-center w-auto mr-10">
                    <NavLink text={"Product List"} href={"/dashboard/product"} />
                </div>
                <div className="flex justify-start items-center w-auto mr-10">
                    <NavLink text={"Dashboard Test"} href={"/dashboard/test"} />
                </div>
            </div>


            <div className="flex justify-end items-center w-1/2">
                <div className="relative flex justify-center items-center w-[200px] border-l-2 border-gray-300" ref={menuRef}>
                    <button
                        className="w-[50px] h-[50px] text-4xl flex justify-center items-center"
                        onClick={toggleMenu}
                    >
                        <IoMenu />
                    </button>

                    {isOpen && (
                        <div className="absolute top-[80px] right-0 w-[200px] bg-white shadow-lg border-2 border-gray-300 rounded-lg">
                            <ul className="flex flex-col items-center space-y-2 p-4">
                                <li>
                                    <NavLink text={"Create Product"} href={"/dashboard/create"} />
                                </li>
                                <li>
                                    <NavLink text={"Logout"} href={"/"} />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
