/* eslint-disable react/prop-types */

const InputGroup = ({ type, name, value, onChange, placeholder, className, required}) => {
    return (
        <input
            type={type}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`appearance-none rounded-md relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm ${className}`}
          />
    )
}

export default InputGroup

