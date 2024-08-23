import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import InputGroup from "../../../components/elements/InputGroup";


export default function DashboardProductEdit() {
    const [product, setProduct] = useState([]);
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
    console.log(product);

    const updateProduct = async () => {
        try {
            const response = await fetch(`http://localhost:4455/products/${id}?key=aldypanteq`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error(`Failed to update product`);
            }
            const result = await response.json();
            console.log(result);
            navigate('/dashboard/product');
        } catch (error) {
            console.error(error);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        updateProduct();
        
    }

    const renderElements = () => {
        return (
            <div className="hero bg-white">
                <div className="hero-content">
                    <img
                        src={"https://placehold.co/400x400"}
                        className="max-w-sm rounded-lg shadow-xl" />
                    <div>
                        <form className="w-[400px] flex flex-col gap-4" onSubmit={submitHandler}>
                            <InputGroup
                                type={"text"}
                                name={"name"}
                                placeholder={"Product Name"}
                                required
                                value={product.name}
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                            />
                            <InputGroup
                                type={"text"}
                                name={"category"}
                                placeholder={"Category"}
                                value={product.category}
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            />
                            <InputGroup
                                type={"number"}
                                name={"price"}
                                placeholder={"Price"}
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            />
                            <InputGroup
                                type={"text"}
                                name={"description"}
                                placeholder={"Description"}
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            />
                            <InputGroup
                                type={"text"}
                                name={"image"}
                                placeholder={"Image URL"}
                                value={product.image}
                                onChange={(e) => setProduct({ ...product, image: e.target.value })}
                            />

                            <button
                                onClick={submitHandler}
                                
                                type="submit"
                                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Update Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-center items-center w-[1200px] h-[600px] bg-white rounded-3xl shadow-md">
            {renderElements()}
        </div>
    )
}


