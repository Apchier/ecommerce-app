import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosIntance from "../../libs/axios";

export const useDeleteProduct = () => {
  const navigate = useNavigate();
  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosIntance.delete(`/products/${id}`)
          const result = response.data
          Swal.fire({
            title: "Deleted!",
            text: `${result.message}`,
            icon: "success"
          }).then(() => {
            navigate('/dashboard/product');
            window.location.reload();
          })
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error",
            text: "Failed to delete the product.",
            icon: "error"
          });
        }
      }
    })
  }
  return { deleteProduct }
}
