import { useNavigate } from "react-router-dom";
import axiosIntance from "../../libs/axios";
import { ConfirmDeleteAlert, SuccessAlert, ErrorAlert } from "../../components/elements/SweetAlert";

export const useDeleteProduct = () => {
  const navigate = useNavigate()

  const deleteProduct = async (id) => {
    const result = await ConfirmDeleteAlert();

    if (result.isConfirmed) {
      try {
        const response = await axiosIntance.delete(`/products/${id}`)
        const { message } = response.data
        await SuccessAlert(message)
        navigate('/dashboard')
        window.location.reload()
      } catch (error) {
        console.error(error)
        ErrorAlert()
      }
    }
  };

  return { deleteProduct }
}
