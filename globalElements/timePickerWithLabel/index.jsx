"use client";
import { useRef } from "react";

export const TimePickerWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////

  //  name="time"
  //  label="Time"
  //  error={errors.time}
  //  touched={touched.time}
  //  onBlur={handleBlur}
  //  onChange={handleChange}

  const timePicker = useRef(null);
  return (
    <div className="flex flex-col h-full w-full relative">
      <label
        className={`bg-white ${
          props.touched && props.error ? "text-red-600" : "text-[#919EAB]"
        } text-xs font-light absolute left-6 -top-2 `}
      >
        {props.label}
      </label>
      <input
        {...props}
        ref={timePicker}
        onClick={() => timePicker.current.showPicker()}
        type="time"
        name={props.name}
        className={` cursor-pointer flex flex-col justify-center w-full rounded-lg min-h-[40px] border ${
          props.touched && props.error
            ? "border-red-600 border"
            : "border-[#919EAB52]"
        }  px-4`}
      />
    </div>
  );
};
