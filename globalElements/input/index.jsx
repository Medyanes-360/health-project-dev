"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import './phone.css'
const InputType = ({
  type,
  inputType = "text",
  placeholder,
  name,
  onChange,
  className,
  value,
  ...props
}) => {
  switch (type) {
    case "input":
      return (
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-[40px] bg-slate-100 py-3 px-5 border-none focus:border-primary ${className}`}
          {...props}
        />
      );
    case "textarea":
      return (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-[40px] bg-slate-100 py-3 px-5 border-none focus:border-primary ${className}`}
          rows={5}
          {...props}
        />
      );

    case "phone":
      return (
        <div>
          <PhoneInput
            defaultCountry="TR"
            placeholder="Enter phone number"
            international
            countryCallingCodeEditable
            value={value}
            onChange={onChange}
            
            className={`custom-phone-input w-full h-[40px] bg-slate-100 py-3 px-5 border-none focus:border-primary ${className}`}
          />
        </div>
      );

    default:
      return null; // Handle unexpected type
  }
};

const CustomInput = ({
  type,
  className = "",
  inputType,
  placeholder,
  onChange,
  value,
  name,
  ...props
}) => {
  // type only input or textarea

  return (
    <div>
      <InputType
        name={name}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        inputType={inputType}
        value={value}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
