"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./phone.css";
import { cn } from "@/lib/utils";
const InputType = ({
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
          className={cn(
            `w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl`,
            className
          )}
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
          className={cn(
            `w-full bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl`,
            className
          )}
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
            className={cn(
              ` w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl`,
              className,
              css ? "custom-phone-input border-none" : ""
            )}
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
  css,
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
