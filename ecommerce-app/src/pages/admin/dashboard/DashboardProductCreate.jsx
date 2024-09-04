import { useState } from "react";
import Create from "../../../../public/assets/images/Create.png";
import InputGroup from "../../../components/elements/InputGroup";
import { useCreateProduct } from "../../../features/product";
import { useFormik } from 'formik';

export default function DashboardProductCreate() {
  // const [product, setProduct] = useState({
  //   name: "",
  //   price: "",
  //   category: "",
  //   description: "",
  //   image: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProduct((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }

  // const { createProductData, message} = useCreateProduct()

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   createProductData(product);
  // };

  const { createProductData } = useCreateProduct();

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
    },
    onSubmit: values => {
      createProductData(values);
      console.log(values);
    },
  });


  return (
    <div className="flex w-[1600px] text-gray-600 justify-center items-center">
      <div className="w-3/4 flex justify-center items-center p-10 h-[600px] bg-white rounded-lg shadow-lg">
        <div className="w-1/2 flex flex-col tracking-wide gap-3">
          <p className="text-3xl font-bold text-gray-800">Your product is being prepared...</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <img src={Create} className="w-full mt-4" alt="Create" />
        </div>
        <form className="w-1/2 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <InputGroup
            type={"text"}
            name={"name"}
            placeholder={"Product Name"}
            required
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <InputGroup
            type={"text"}
            name={"category"}
            placeholder={"Category"}
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          <InputGroup
            type={"number"}
            name={"price"}
            placeholder={"Price"}
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <InputGroup
            type={"text"}
            name={"description"}
            placeholder={"Description"}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <InputGroup
            type={"text"}
            name={"image"}
            placeholder={"Image URL"}
            value={formik.values.image}
            onChange={formik.handleChange}
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Product
          </button>
          {/* {message && <p className="mt-4 text-center text-green-500">{message}</p>} */}
        </form>
      </div>
    </div>
  );
}
