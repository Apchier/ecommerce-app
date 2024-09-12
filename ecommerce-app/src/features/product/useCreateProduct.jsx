import { useState } from "react";
import Swal from "sweetalert2";
import axiosIntance from "../../libs/axios";

export const useCreateProduct = () => {
    // const [message, setMessage] = useState("");
    // const [error, setError] = useState(null);

    const [ state, setState ] = useState({
        message: "",
        error: null
    })
    const createProductData = async (data) => {
        try {
            const response = await axiosIntance.post("/products", data);
            setState({
                ...state,
                message: response.data.message
            })
            
            Swal.fire({
                title: "Success!",
                text: "Product has been created successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            setState({
                ...state,
                error: error
            })
            Swal.fire({
                title: "Error!",
                text: "Failed to create product.",
                icon: "error",
                confirmButtonText: "OK",
            });
        } 
    }
    return { 
        ...state,
        createProductData
    };
}