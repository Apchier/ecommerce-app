import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import DashboardProductCreate from "./pages/admin/dashboard/DashboardProductCreate";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ShoppingCart from "./pages/guest/ShoppingCart"
import DashboardProductDetail from "./pages/admin/dashboard/DashboardProductDetail";
import DashboardProductEdit from "./pages/admin/dashboard/DashboardProductEdit";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shopping-cart", 
                element: <ShoppingCart />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "create",
                element: <DashboardProductCreate />,
            },
            {
                path: "detail/:id",
                element: <DashboardProductDetail />,
            },
            {
                path: "edit/:id",
                element: <DashboardProductEdit />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
])