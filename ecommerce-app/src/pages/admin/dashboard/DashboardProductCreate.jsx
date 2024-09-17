import { useNavigate } from "react-router-dom";
import Create from "../../../../public/assets/images/Create.png";
import InputGroup from "../../../components/fragments/InputGroup";
import { useCreateProduct } from "../../../features/product";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function DashboardProductCreate() {
  const { createProductData } = useCreateProduct();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short! Must be at least 5 characters')
      .max(50, 'Too Long! Must be less than 50 characters')
      .required('Required'),
    category: Yup.string()
      .optional(),
    price: Yup.string()
      .min(4, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, `Too Short! Must be at least 2 characters`)
      .max(200, 'Too Long! Must be less than 200 characters')
      .required('Required'),
    image: Yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      createProductData(values);
      console.log(values);
      navigate('/dashboard');
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
            label={"Product Name"}
            type={"text"}
            name={"name"}
            // placeholder={"Product Name"}
            required
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <InputGroup
            label={"Category"}
            type={"text"}
            name={"category"}
            // placeholder={"Category"}
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.errors.category}
            touched={formik.touched.category}
          />
          <InputGroup
            label={"Price"}
            type={"number"}
            name={"price"}
            // placeholder={"Price"}
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.errors.price}
            touched={formik.touched.price}
          />
          <InputGroup
            label={"Description"}
            type={"text"}
            name={"description"}
            // placeholder={"Description"}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
            touched={formik.touched.description}
          />
          <InputGroup
            label={"Image URL"}
            type={"text"}
            name={"image"}
            // placeholder={"Image URL"}
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.errors.image}
            touched={formik.touched.image}
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
