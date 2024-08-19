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
      <tr key={index} className={` ${index % 2 === 0 ? ' bg-[#eeeef1] ' : 'bg-white'}`}>
        <td>{index + 1}</td>
        <td className="">{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td className="flex justify-evenly mt-4 ">
          <button className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300">Edit</button>
          <button className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300">View</button>
          <button className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex w-[1600px] h-screen container justify-center font-poppins">
      <div className="flex w-3/4 justify-center border-gray-300 rounded-xl border-2 p-2">
        <table className="w-full text-center">
          <thead className="text-center text-gray-600">
            <tr className="text-center border-b-2 border-gray-500">
              <th className="p-4">
                <p className="flex justify-evenly items-center cursor-pointer">No<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly items-center cursor-pointer">Name<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly items-center cursor-pointer">Category<PiCaretUpDown className="" /></p>
              </th>
              <th className="p-4">
                <p className="flex justify-evenly items-center cursor-pointer">Price<PiCaretUpDown className="" /></p>
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
