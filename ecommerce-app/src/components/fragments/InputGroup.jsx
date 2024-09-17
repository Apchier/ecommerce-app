/* eslint-disable react/prop-types */
import Label from '../elements/Label'
import Input from '../elements/Input'

const InputGroup = ({ htmlFor, label, type, name, value, onChange, placeholder, className, required, error, touched }) => {
  return (
    <div className="flex flex-col w-full items-start gap-1">
      <Label htmlFor={htmlFor} label={label} />
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required={required}
        error={error}
        touched={touched}
      />
    </div>
  );
}

export default InputGroup
