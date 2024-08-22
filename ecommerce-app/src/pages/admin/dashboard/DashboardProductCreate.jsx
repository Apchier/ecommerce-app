import { useState } from "react";
import Swal from "sweetalert2";
import Create from "../../../../public/assets/images/Create.png";

export default function DashboardProductCreate() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createProductData(product);
  };

  const createProductData = async (data) => {
    try {
      const response = await fetch("http://localhost:4455/products?key=aldypanteq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
        }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setMessage(result.message);
      setProduct({ name: "", price: "", category: "", description: "", image: "" });

      // Show SweetAlert success message
      Swal.fire({
        title: "Success!",
        text: "Product has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      setMessage("Failed to create product");

      // Show SweetAlert error message
      Swal.fire({
        title: "Error!",
        text: "Failed to create product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex w-[1600px] min-h-screen text-gray-600 justify-center items-center">
      <div className="w-3/4 flex justify-center items-center p-6 bg-white rounded-lg shadow-lg">
        <div className="w-1/2 flex flex-col tracking-wide gap-3">
          <p className="text-3xl font-bold text-gray-800">Your product is being prepared...</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <img src={Create} className="w-full mt-4" alt="Create" />
        </div>
        <form className="w-1/2 flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Product
          </button>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}
