import { useEffect, useState } from "react";
import axiosIntance from "../../libs/axios";

export const useProductID = (id) => {
  // const [products, setProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalProducts, setTotalProducts] = useState(0);
  // const { id } = useParams();

  // const productsPerPage = 12;

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(`http://localhost:4455/products?key=aldypanteq&page=${currentPage}&limit=${productsPerPage}`);
  //     const result = await response.json();
  //     setProducts(result.data.products);
  //     setTotalProducts(result.data.total);
  //     console.log(result);
  //   };
  //   fetchProducts();
  // }, [currentPage, id]);

  // return { products, currentPage, totalProducts, setCurrentPage, productsPerPage };
  
  const [state, setState] = useState({
    products: [],
    currentPage: 1,
    totalProducts: 0,
    productsPerPage: 12
  })

  useEffect(() => {
    const fetchProducts = async (id) => {
      try {
        const response = await axiosIntance.get(`/products/${id}`)
        setState({
          products: response.data.data.products,
          currentPage: response.data.data.currentPage,
          totalProducts: response.data.data.totalProducts,
          productsPerPage: response.data.data.productsPerPage
        })
      } catch (error) {
        setState({ error: error.message })
      }
    }
    fetchProducts()
  }, [id])
  return {
    ...state,
    useProductID
  }
}

