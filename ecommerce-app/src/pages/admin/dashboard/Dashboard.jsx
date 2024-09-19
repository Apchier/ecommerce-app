import { useState } from "react";
import { useDeleteProduct } from "../../../features/product";
import Pagination from "../../../components/elements/Pagination";
import DropDownFilterDate from "../../../components/elements/DropDownFilterDate";
import ProductsTable from "../../../components/fragments/ProductsTable";
import UserTable from "../../../components/elements/UserTable";
import Chart from "../../../components/elements/Chart";
import { useProducts } from "../../../features/product/useProducts";

export default function Dashboard() {
    const [limit] = useState(10); 
    const [page, setPage] = useState(1); 
    const { data: products, isLoading, error, totalPages } = useProducts(limit, page); 
    const { deleteProduct } = useDeleteProduct(); 

    const handleDeleteProduct = async (productId) => {
        const success = await deleteProduct(productId); 
        if (success) {
            setPage(1);
        } else {
            console.error("Failed to delete product.");
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const likesData = [
        { week: 'Week 1', likes: 14000 },
        { week: 'Week 2', likes: 17000 },
        { week: 'Week 3', likes: 15000 },
        { week: 'Week 4', likes: 26000 },
        { week: 'Week 5', likes: 20000 },
        { week: 'Week 6', likes: 18000 },
        { week: 'Week 7', likes: 21000 },
    ];

    const users = [
        { id: 1, name: "Aldy Ibnu Faizal", email: "aldyprotprot@example.com", status: "Active" },
        { id: 2, name: "Rafi Andrea Lesmana", email: "rafiprotprot@example.com", status: "Active" },
    ];

    return (
        <div className="flex w-[1300px] min-h-screen container flex-col gap-10 text-text-gray">
            <div className="flex w-full flex-col gap-10 text-text-gray p-10 bg-white rounded-2xl">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">Your Report</span>
                    <DropDownFilterDate />
                </div>
                <p className="text-gray-600">
                    See stats for your latest Campaign, and promote them to grow your audience.
                </p>

                {/* Chart Component */}
                <Chart data={likesData} />

                {/* User Table */}
                <UserTable users={users} />

                {/* Products Table */}
                <ProductsTable
                    products={products}
                    deleteProduct={handleDeleteProduct} 
                    page={page}
                    limit={limit}
                />

                {/* Pagination Component */}
                <Pagination
                    className="flex justify-center items-center mt-4"
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                />
            </div>
        </div>
    );
}
