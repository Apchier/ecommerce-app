import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosIntance from "../../libs/axios";

export const useFetchProductId = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosIntance.get(`http://localhost:4455/products/${id}?key=aldypanteq`);
                const result = response.data;
                setProduct(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);
    return { product };
}