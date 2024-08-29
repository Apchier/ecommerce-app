import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchProductId = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
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
    return { product };
}