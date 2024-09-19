import axiosIntance from "../../libs/axios";
import { useState } from "react";
import { SuccessAlert } from "../../components/elements/SweetAlert";

export const useUpdateProduct = () => {
  const [state, setState] = useState({
    data: { name: "", description: "", category: "", image: "", price: "" },
    pending: false,
    error: null,
    message: "",
    status: "",
  });

  const updateProduct = async (id, data) => {
    setState(prev => ({ ...prev, pending: true, error: null }));

    try {
      const response = await axiosIntance.put(`products/${id}`, data);
      const { message } = response.data;
      setState({
        product: response.data.data,
        pending: false,
        error: null,
        message,
        status: response.data.status,
      });
      SuccessAlert(message);
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        pending: false, 
        error: error instanceof Error ? error : new Error('An unknown error while updating product'),
      }));
    }
  }

  return {
    ...state,
    updateProduct
  }
}
