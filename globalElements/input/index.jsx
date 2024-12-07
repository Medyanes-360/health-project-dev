"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./phone.css";

const CustomInput = ({
  type,
  inputType = "text",
  placeholder,
  name,
  onChange,
  className,
  value,
  css,
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
          className={`
            w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl 
            ${className}
          `}
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
          className={`w-full bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl ${className}`}
          {...props}
          rows={5}
        />
      );

    case "phone":
      return (
        <div>
          <PhoneInput
            name={name}
            defaultCountry="TR"
            placeholder="Enter phone number"
            international
            countryCallingCodeEditable
            value={value}
            onChange={onChange}
            className={`${className} ${
              css ? "custom-phone-input" : "custom-phone-input2"
            }`}
          />
        </div>
      );

    default:
      return null; // Handle unexpected type
  }
};

export default CustomInput;
