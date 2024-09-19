import { Link, useParams } from "react-router-dom";
import { useDeleteProduct } from "../../../features/product";
import { useProductID } from "../../../features/product/useProductID";


export default function DashboardProductDetail() {
    const { id } = useParams(); 
    const { data: product, loading, error } = useProductID(id); 
    const { deleteProduct } = useDeleteProduct();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>No Product Found</div>;

    const renderElements = () => {
        return (
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={"https://placehold.co/400x400"}
                        className="max-w-sm rounded-lg shadow-xl mr-4" />
                    <div>
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <div className="py-6">
                            <p className="">{product.description}</p>
                            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt neque fugiat <br /> odio fuga cupiditate vitae eum vero quae sed?</p>
                        </div>
                        <p className="text-green-600">Rp. {product.price}</p>
                        <p>{product.category}</p>
                        <div className="flex items-center gap-4">
                            <div className="mt-6">
                                <Link
                                    to={"/dashboard"}
                                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >Kembali
                                </Link>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    onClick={() => deleteProduct(product?.id)}
                                >Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="flex justify-center items-center w-[1200px] h-[600px] bg-white rounded-3xl shadow-md">
            {renderElements()}
        </div>
    )
}
