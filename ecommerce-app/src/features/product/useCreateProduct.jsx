import { useState } from "react";
import Swal from "sweetalert2";

export const useCreateProduct = () => {
    const [message, setMessage] = useState("");
    const [error] = useState(null);

    const createProductData = async (data) => {
        try {
            const response = await fetch("http://localhost:4455/products?key=aldypanteq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    price: Number(data.price),
                }),
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            setMessage(result.message);

            Swal.fire({
                title: "Success!",
                text: "Product has been created successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            setMessage("Failed to create product");

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