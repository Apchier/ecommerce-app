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
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={"https://placehold.co/400x400"}
                        className="max-w-sm rounded-lg shadow-xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product?.name}</h1>
                        <div className="py-6">
                        <p className="">{product?.description}</p>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt neque fugiat <br /> odio fuga cupiditate vitae eum vero quae sed?</p>
                        </div>
                        <p className="text-green-600">Rp. {product?.price}</p>
                        <p>{product?.category}</p>
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
        <div className="flex justify-center items-center w-[1200px] h-[600px] bg-white rounded-3xl shadow-md">
            {renderElements()}
        </div>
    )
}
