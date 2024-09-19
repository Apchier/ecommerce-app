import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";

export const useProductID = (id) => {
    const [state, setState] = useState({
        data: null,
        loading: true, 
        error: null,
        message: '',
        status: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`/products/${id}`);
                setState({
                    data: response.data.data, 
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status,
                });
            } catch (error) {
                setState((prev) => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error : new Error("An unknown error occurred"),
                }));
            }
        };
        
        fetchProduct();
    }, [id]);

    return state;
};
