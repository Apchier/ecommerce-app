import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4455/products?key=aldypanteq&page=${currentPage}&limit=${productsPerPage}`);
        const result = await response.json();
        setProducts(result.data.products);
        console.log(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const renderElements = () => {
    return products.map((product, index) => (
      <div key={index} className="card glass w-96">
        <figure>
          <img
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    ));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-wrap w-[1600px] min-h-screen gap-4">
        {renderElements()}
      </div>
      <div className="join">
        <button className="join-item btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button className="join-item btn" onClick={handleNextPage}>
          »
        </button>
      </div>
    </div>
  );
}
