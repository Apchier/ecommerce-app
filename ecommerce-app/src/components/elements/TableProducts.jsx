/* eslint-disable react/prop-types */
const TableProducts = ({ children }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            {children}
        </table>
    );
};

const TableHead = ({ children }) => {
    return (
        <thead className="bg-gray-100">
            {children}
        </thead>
    );
};

const TableBody = ({ children }) => {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {children}
        </tbody>
    );
};

TableProducts.TableHead = TableHead;
TableProducts.TableBody = TableBody;

export default TableProducts;