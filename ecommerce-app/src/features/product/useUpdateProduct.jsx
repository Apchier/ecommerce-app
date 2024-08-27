import { useNavigate } from "react-router-dom";

export const useUpdateProduct = () => {
  const navigate = useNavigate();

  const updateProduct = async (id, product) => {
    try {
      const response = await fetch(`http://localhost:4455/products/${id}?key=aldypanteq`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      const result = await response.json();
      console.log(result);
      navigate('/dashboard/product');
    } catch (error) {
      console.error(error);
    }
  }

  return { updateProduct }
}
