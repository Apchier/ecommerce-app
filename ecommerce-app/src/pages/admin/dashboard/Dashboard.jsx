import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDeleteProduct } from "../../../features/product";
import axiosInstance from "../../../libs/axios";
import Pagination from "../../../components/elements/Pagination";
import DropDownFilterDate from "../../../components/elements/DropDownFilterDate";
import ProductsTable from "../../../components/fragments/ProductsTable";
import UserTable from "../../../components/elements/UserTable";
import Chart from "../../../components/elements/Chart";


export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [limit] = useState(10);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const { deleteProduct } = useDeleteProduct();

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get(
                    `/products?&limit=${limit}&page=${page}`
                );
                const result = response.data;
                if (!result.data) {
                    navigate(-1);
                    return;
                }
                setProducts(result.data.products);
                setTotalPages(Math.ceil(result.data.total / limit));
            } catch (error) {
                setError(error instanceof Error ? error.message : "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [page, limit, navigate]);

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
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">Your Report</span>
                    <DropDownFilterDate />
                </div>
                <p className="text-gray-600">
                    See stats for your latest Campaign, and promote them to grow your audience.
                </p>

                <Chart data={likesData} />

                <UserTable users={users} />
                <ProductsTable
                    products={products}
                    deleteProduct={deleteProduct}
                    page={page}
                    limit={limit}
                />
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
