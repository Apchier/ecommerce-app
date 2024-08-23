import NavLink from "../../elements/NavLink";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex justify-around items-center text-xl font font-semibold w-[1200px] text-gray-600 h-[80px] border-2 border-gray-300 rounded-b-3xl bg-[#f7f7f8] shadow-md z-10">
            <div className="flex justify-center items-center w-[200px]">
                <NavLink text={"Home"} href={"/"} />
            </div>
            <div className="flex justify-center items-center w-[200px] ">
                <NavLink text={"All Products"} href={"/shopping-cart"} />
            </div>
            <div className="flex justify-center items-center w-[200px]">
                <NavLink text={"Dashboard"} href={"/dashboard"} />
            </div>
            <div className="flex justify-center items-center w-[200px]">
                <NavLink text={"Product"} href={"/dashboard/product"} />
            </div>
            <div className="flex justify-center items-center w-[200px]">
                <NavLink text={"Create"} href={"/dashboard/create"} />
            </div>
        </nav>
    )
}
