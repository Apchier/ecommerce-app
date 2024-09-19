import { useState } from "react";
import Swal from "sweetalert2";
import axiosIntance from "../../libs/axios";
import { SuccessAlert } from "../../components/elements/SweetAlert";

export const useCreateProduct = () => {
    const [state, setState] = useState({
        data: null,
        pending: true,
        error: null,
        message: "",
        status: "",
    })

    const createProductData = async (data) => {
        setState((prev) => ({ ...prev, pending: true, error: null }));

        try {
            const response = await axiosIntance.post("/products", data);
            setState({
                ...state,
                message: response.data.message
            })
            SuccessAlert(response.data.message);
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