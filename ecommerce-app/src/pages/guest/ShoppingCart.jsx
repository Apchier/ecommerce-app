import ProductCard from "../../components/elements/ProductCard";
import Pagination from "../../components/elements/Pagination";
import axiosInstance from "../../libs/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit] = useState(9);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(
          `/products?limit=${limit}&page=${page}`
        )
        const result = response.data;
        if (!result.data) {
          navigate(-1);
          return
        }
        setProducts(result.data.products);
        setTotalPages(Math.ceil(result.data.total / limit));
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setIsLoading(false)
      }
    };
    fetchProducts()
  }, [page, limit, navigate]);

  const renderElements = () => {
    return products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <div className="flex w-full justify-between items-center">
        <div className="text-xl font-semibold">Showing all products</div>
        <div className="flex justify-center items-center text-lg">
          <label htmlFor="sort" className="mr-2">Sort By :</label>
          <select
            id="sort"
            className="select select-bordered w-[300px] text-lg"
          >
            <option value="highest">Highest Price</option>
            <option value="lowest">Lower Price</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-[1300px] items-center min-h-screen gap-6 rounded-xl mb-2">
        {renderElements()}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  )
}
