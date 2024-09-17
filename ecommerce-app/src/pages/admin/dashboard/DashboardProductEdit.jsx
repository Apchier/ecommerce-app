import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputGroup from "../../../components/fragments/InputGroup";
import { useUpdateProduct } from "../../../features/product";
import { useFetchProductId } from "../../../features/product";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function DashboardProductEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { product } = useFetchProductId();
    const { updateProduct } = useUpdateProduct();


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
            .min(2, 'Too Short! Must be at least 2 characters')
            .max(200, 'Too Long! Must be less than 200 characters')
            .required('Required'),
        image: Yup.string()
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            category: "",
            price: "",
            description: "",
            image: "",
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            if (id) {
                updateProduct(id, values);
                formik.resetForm();
                navigate('/dashboard');
            } else {
                console.log("error");
            }
        },
    });

    useEffect(() => {
        if (product) {
            formik.setValues({
                name: product.name,
                category: product.category,
                price: product.price,
                description: product.description,
                image: product.image,
            });
        }
    }, [product])

    const renderElements = () => {
        return (
            <div className="hero bg-white">
                <div className="hero-content">
                    <img
                        src={"https://placehold.co/400x400"}
                        className="max-w-sm rounded-lg shadow-xl" />
                    <div>
                        <form
                            className="w-[400px] flex flex-col gap-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <InputGroup
                                htmlFor={"productName"}
                                type={"text"}
                                name={"name"}
                                placeholder={"Product Name"}
                                required
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                                touched={formik.touched.name}
                            />
                            <InputGroup
                                htmlFor={"category"}
                                type={"text"}
                                name={"category"}
                                placeholder={"Category"}
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                error={formik.errors.category}
                                touched={formik.touched.category}
                            />
                            <InputGroup
                                htmlFor={"price"}
                                type={"number"}
                                name={"price"}
                                placeholder={"Price"}
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                error={formik.errors.price}
                                touched={formik.touched.price}
                            />
                            <InputGroup
                                htmlFor={"description"}
                                type={"text"}
                                name={"description"}
                                placeholder={"Description"}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.errors.description}
                                touched={formik.touched.description}
                            />
                            <InputGroup
                                htmlFor={"image"}
                                type={"text"}
                                name={"image"}
                                placeholder={"Image URL"}
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                error={formik.errors.image}
                                touched={formik.touched.image}
                            />

                            <button
                                onClick={formik.handleSubmit}
                                type="submit"
                                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Update Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-center items-center w-[1200px] h-[600px] bg-white rounded-3xl shadow-md">
            {renderElements()}
        </div>
    )
}


