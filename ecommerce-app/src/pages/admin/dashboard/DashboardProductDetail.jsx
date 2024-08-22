import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function DashboardProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:4455/products/${id}?key=aldypanteq`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product`);
                }
                const result = await response.json();
                setProduct(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    const deleteHandler = async () => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:4455/products/${id}?key=aldypanteq`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete product`);
                }
                await Swal.fire({
                    title: 'Deleted!',
                    text: 'Your product has been deleted.',
                    icon: 'success',
                });
                navigate('/dashboard/product');
            }
        } catch (error) {
            Swal.fire({
                title: 'Oops...',
                text: error instanceof Error ? error.message : 'Something went wrong!',
                icon: 'error',
            });
        }
    };

    if (!product) return <div>No Product Found</div>;

    const renderElements = () => {
        return (
            <div className="container mx-auto w-[1300px] p-6 pt-[120px]">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Image */}
                    <div className="lg:w-1/2">
                        <img
                            src={product?.image}
                            alt="Product Name"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-gray-600">
                            {product?.name}
                        </h1>
                        <p className="mt-4 text-gray-400">
                            {product?.description}
                        </p>
                        <p className="mt-4 text-2xl font-semibold text-red-600">
                            {product?.price}
                        </p>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-600">Category</h2>
                            <p className="mt-2 text-gray-400 ">
                                {product?.category}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="mt-6">
                                <Link to={"/dashboard/product"} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Kembali
                                </Link>
                            </div>
                            <div className="mt-6">
                                <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={deleteHandler}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="w-full h-screen bg-[#f5f5f5]">
            {renderElements()}
        </div>
    )
}
