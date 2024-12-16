"use client";
import { useRef } from "react";

export const DatePickerWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////
  //  <Field
  //  component={DatePickerWithLabel}
  //  name="date"
  //  label="date"
  //  error={errors.date}
  //  isTouched={touched.date}
  //  onBlur={handleBlur}
  //  onChange={handleChange}
  // />
  const datePicker = useRef(null);
  return (
    <div className="flex flex-col h-full w-full relative">
      <label
        className={`bg-white ${
          props.isTouched && props.error ? "text-red-600" : "text-[#919EAB]"
        } text-xs font-light absolute left-6 -top-2 `}
      >
        {props.label}
      </label>
      <input
        {...props}
        ref={datePicker}
        onClick={() => datePicker.current.showPicker()}
        type="date"
        name={props.field.name}
        className={` cursor-pointer flex flex-col justify-center w-full rounded-lg min-h-[40px] border ${
          props.isTouched && props.error
            ? "border-red-600 border"
            : "border-[#919EAB52]"
        }  px-4`}
      />
    </div>
  );
};
