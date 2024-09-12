import { useNavigate } from "react-router-dom";
import axiosIntance from "../../libs/axios";

export const useUpdateProduct = () => {
  const navigate = useNavigate();

  const updateProduct = async (id, product) => {
    try {
      const response = await axiosIntance.put(`products/${id}`, product);
      const result = response.data
      console.log(result);
      navigate('/dashboard/product');
    } catch (error) {
      console.error(error);
    }
  }

  return { updateProduct }
}
