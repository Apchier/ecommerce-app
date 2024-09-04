import { useState } from "react";
import Swal from "sweetalert2";
import axiosIntance from "../../libs/axios";

export const useCreateProduct = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const createProductData = async (data) => {
        try {
            const response = await axiosIntance.post("/products?key=aldypanteq", data);
            const result = response.data;
            setMessage(result.message);

            Swal.fire({
                title: "Success!",
                text: "Product has been created successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            setMessage("Failed to create product");
            setError(error);

            Swal.fire({
                title: "Error!",
                text: "Failed to create product.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }
    return { createProductData, message, error};
}