import { useEffect, useState } from "react";
import { PiCaretUpDown } from "react-icons/pi";

export default function DashboardProduct() {
  const [products, setProducts] = useState([]);
  const productsPerPage = 10;
  const currentPage = 1;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:4455/products?key=aldypanteq&page=${currentPage}&limit=${productsPerPage}`);
      const result = await response.json();
      setProducts(result.data.products);
      console.log(result);
    };
    fetchProducts();
  }, []);

  const renderElements = () => {
    return products.map((product, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td className="flex justify-evenly mt-4 ">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Edit</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex w-[1600px] h-screen container font-poppins">
      <div className="flex w-full justify-center">
        <table className="w-3/4 text-center border-gray-300 border-2 rounded-3xl">
          <thead className="text-center">
            <tr className="text-center border-b-2 border-gray-500">
              <th className="p-4">
                <p className="flex justify-between items-center cursor-pointer">No<PiCaretUpDown className=""/></p>
              </th>
              <th className="p-4">
                <p className="flex justify-between items-center cursor-pointer">Name<PiCaretUpDown className=""/></p>
              </th>
              <th className="p-4">
                <p className="flex justify-between items-center cursor-pointer">Category<PiCaretUpDown className=""/></p>
              </th>
              <th className="p-4">
                <p className="flex justify-between items-center cursor-pointer">Price<PiCaretUpDown className=""/></p>
              </th>
              <th className="p-4">
                <p className="flex justify-center items-center cursor-pointer">Action</p>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {renderElements()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
