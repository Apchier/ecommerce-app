import Navbar from "../fragments/guest/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-[#eeeef1] p-4 gap-4">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
