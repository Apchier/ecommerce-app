import { useState, useEffect } from "react";
import ProductCard from "../../components/elements/ProductCard";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4455/products?key=aldypanteq&page=${currentPage}&limit=${productsPerPage}`);
        const result = await response.json();
        setProducts(result.data.products);
        setTotalProducts(result.data.total);
        console.log(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const renderElements = () => {
    return products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <div className="flex w-full justify-between items-center">
        <div className="text-xl font-semibold">Showing all products</div>
        <div className="flex justify-center items-center text-lg">
          <label htmlFor="" className="mr-2">Sort By :</label>
          <select className="select select-bordered w-[300px] text-lg">
            <option disabled selected>Latest</option>
            <option>Reviews</option>
            <option>Highest Price</option>
            <option>Lower Price</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-[1600px] items-center min-h-screen gap-4 rounded-xl">
        {renderElements()}
      </div>
      <div className="join">
        <button className="join-item btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button className="join-item btn" onClick={handleNextPage} disabled={currentPage >= Math.ceil(totalProducts / productsPerPage)}>
          »
        </button>
      </div>
    </div>
  );
}
