import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProductID = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const { id } = useParams();

  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:4455/products?key=aldypanteq&page=${currentPage}&limit=${productsPerPage}`);
      const result = await response.json();
      setProducts(result.data.products);
      setTotalProducts(result.data.total);
      console.log(result);
    };
    fetchProducts();
  }, [currentPage, id]);

  return { products, currentPage, totalProducts, setCurrentPage, productsPerPage };
}
