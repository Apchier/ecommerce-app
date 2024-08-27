import { PiCaretUpDown } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../../features/product/useDeleteProduct";
import { useProductID } from "../../../features/product/useProductID";

export default function DashboardProduct() {
  const { products, currentPage, totalProducts, setCurrentPage, productsPerPage } = useProductID();

  const { deleteProduct } = useDeleteProduct();

  const renderElements = () => {
    return products.map((product, index) => (
      <tr key={index}>
        <td className="py-4">{(currentPage - 1) * productsPerPage + index + 1}</td>
        <td className="py-4">{product.name}</td>
        <td className="py-4">{product.category}</td>
        <td className="py-4">{product.price}</td>
        <td className="text-center p-1 font-semibold">
          <div className="flex justify-evenly items-center gap-2">
            <Link to={`/dashboard/edit/${product.id}`} className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]">Edit</Link>
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
            <tr>
              <td colSpan={5} className="py-3 ">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
