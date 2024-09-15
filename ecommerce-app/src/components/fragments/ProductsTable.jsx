/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import TableProducts from "../elements/TableProducts";

const ProductsTable = ({ products, page, limit, deleteProduct }) => {
    return (
        <div className="overflow-x-auto overflow-hidden rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Products Table</h2>
            <TableProducts>
                <TableProducts.TableHead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </TableProducts.TableHead>
                <TableProducts.TableBody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {(page - 1) * limit + index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(product.price)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex justify-evenly items-center gap-2">
                                    <Link
                                        to={`/dashboard/edit/${product.id}`}
                                        className="flex justify-center items-center bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]"
                                        aria-label={`Edit ${product.name}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/dashboard/detail/${product.id}`}
                                        className="flex justify-center items-center bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]"
                                        aria-label={`View ${product.name}`}
                                    >
                                        View
                                    </Link>
                                    <button
                                        className="bg-gray-100 text-gray-600 shadow-md px-4 py-2 rounded-l hover:bg-gray-300 transition-all ease-in-out duration-300 w-[90px]"
                                        onClick={() => deleteProduct(product.id)}
                                        aria-label={`Delete ${product.name}`}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </TableProducts.TableBody>
            </TableProducts>
            
        </div>
    );
};

export default ProductsTable;
