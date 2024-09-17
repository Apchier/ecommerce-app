import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDeleteProduct } from "../../../features/product";
import axiosInstance from "../../../libs/axios";
import Pagination from "../../../components/elements/Pagination";
import DropDownFilterDate from "../../../components/elements/DropDownFilterDate";
import ProductsTable from "../../../components/fragments/ProductsTable";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import UserTable from "../../../components/elements/UserTable";


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
    ];
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
        { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", status: "Active" },
        { id: 4, name: "Alice Brown", email: "alice.brown@example.com", status: "Active" },
    ];

    return (
        <div className="flex w-[1200px] min-h-screen container flex-col gap-10 text-text-gray">
            <div className="flex w-full flex-col gap-10 text-text-gray p-10 bg-white rounded-2xl">
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">Your Report</span>
                    <DropDownFilterDate />
                </div>
                <p className="text-gray-600">
                    See stats for your latest Campaign, and promote them to grow your audience.
                </p>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat shadow-md">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                </div>

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
