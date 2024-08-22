import { useEffect, useState } from "react";
import { PiCaretUpDown } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function DashboardProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
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
  }, [currentPage]);

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
          const response = await fetch(`http://localhost:4455/products/${id}?key=aldypanteq`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error('Failed to delete product');
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          }).then(() => {
            window.location.reload();
          });
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
  };

  const renderElements = () => {
    return products.map((product, index) => (
      <tr key={index}>
        <td className="py-4">{(currentPage - 1) * productsPerPage + index + 1}</td>
        <td className="py-4">{product.name}</td>
        <td className="py-4">{product.category}</td>
        <td className="py-4">{product.price}</td>
        <td className="text-center p-1 font-semibold">
          <div className="flex justify-evenly items-center gap-2">
            <button className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]">Edit</button>
            <Link to={`/dashboard/detail/${product.id}`} className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]">View</Link>
            <button className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]" onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        </td>

      </tr>
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
    <div className="flex w-[1600px] h-screen container justify-center font-poppins ">
      <div className="flex w-full justify-center">
        <table className="w-3/4 p-20 text-center rounded-xl shadow-lg bg-white divide-y-2 divide-gray-200">
          <thead className="text-center text-text-gray bg-bg-gray">
            <tr className="">
              <th className="p-4">
                <p className="flex justify-evenly pl-8 items-center cursor-pointer">No<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly pl-8 items-center cursor-pointer">Name<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly pl-8 items-center cursor-pointer">Category<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly pl-8 items-center cursor-pointer">Price<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-center items-center cursor-pointer">Action</p>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-200">
            {renderElements()}
            <td colSpan={5} className="pt-8 ">
              <div className="join">
                <button className="join-item btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
                  «
                </button>
                <button className="join-item btn">Page {currentPage}</button>
                <button className="join-item btn" onClick={handleNextPage} disabled={currentPage >= Math.ceil(totalProducts / productsPerPage)}>
                  »
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
