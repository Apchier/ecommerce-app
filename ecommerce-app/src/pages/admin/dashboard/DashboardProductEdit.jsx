import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputGroup from "../../../components/elements/InputGroup";
import { useUpdateProduct } from "../../../features/product";
import { useFetchProductId } from "../../../features/product";
import { useFormik } from "formik";


export default function DashboardProductEdit() {
    // const [product, setProduct] = useState({});
    // const { id } = useParams();
    // const { product: fetchProduct } = useFetchProductId();

    // useEffect(() => {
    //     if (fetchProduct) {
    //       setProduct(fetchProduct);
    //     }
    //   }, [fetchProduct]);

    // const { updateProduct } = useUpdateProduct();

    // const submitHandler = (e) => {
    //     if (!product) return;
    //     e.preventDefault();
    //     updateProduct(id, product);
    // }

    const navigate = useNavigate();
    const { id } = useParams();
    const { product } = useFetchProductId();
    const { updateProduct } = useUpdateProduct();


    const formik = useFormik({
        initialValues: {
            name: "",
            category: "",
            price: "",
            description: "",
            image: "",
        },
        onSubmit: values => {
            if (id) {
                updateProduct(id, values);
                formik.resetForm();
                navigate('/dashboard/product');
            } else {
                console.log("error");
            }
        },
    });

    useEffect(() => {
        if (product && (
            product.name !== formik.values.name ||
            product.category !== formik.values.category ||
            product.price !== formik.values.price ||
            product.description !== formik.values.description ||
            product.image !== formik.values.image
        )) {
            formik.setValues({
                name: product.name,
                category: product.category,
                price: product.price,
                description: product.description,
                image: product.image,
            });
        }
    }, [product, formik]);

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


