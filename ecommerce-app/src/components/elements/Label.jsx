/* eslint-disable react/prop-types */

const Label = ({ htmlFor, label }) => {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
    )
}

export default Label
