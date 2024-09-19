import ProductCard from "../../components/elements/ProductCard";
import Pagination from "../../components/elements/Pagination";
import { useState } from "react";
import { useProducts } from "../../features/product/useProducts";

export default function ShoppingCart() {
  const [limit] = useState(9);  
  const [page, setPage] = useState(1); 
  const { data: products, isLoading, error, totalPages } = useProducts(limit, page);

  const renderElements = () => {
    if (!products.length) {
      return <div>No Products Found</div>;
    }

    return products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <div className="flex w-full justify-between items-center">
        <div className="text-xl font-semibold">Showing all products</div>
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
  );
}
