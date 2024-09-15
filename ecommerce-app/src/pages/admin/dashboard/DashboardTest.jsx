import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDeleteProduct } from "../../../features/product";
import axiosInstance from "../../../libs/axios";
import Pagination from "../../../components/elements/Pagination";
import DropDownFilterDate from "../../../components/elements/DropDownFilterDate";
import ProductsTable from "../../../components/fragments/ProductsTable";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function DashboardTest() {
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
    ];

    return (
        <div className="flex w-[1600px] min-h-screen container flex-col gap-10 text-text-gray">
            <div className="flex w-full flex-col gap-10 text-text-gray p-10 bg-white rounded-2xl">
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">Your Report</span>
                    <DropDownFilterDate />
                </div>
                <p className="text-gray-600">
                    See stats for your latest Campaign, and promote them to grow your audience.
                </p>
                <div className="stat">
                    <div className="stat-title">Total Likes Over Time</div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={likesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="week" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
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
