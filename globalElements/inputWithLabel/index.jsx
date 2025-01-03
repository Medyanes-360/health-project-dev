export const InputWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////

  //  component={InputWithLabel}
  //  name="name"
  //  label="Name"
  //  error={errors.name}
  //  touched={touched.name}
  //  onBlur={handleBlur}
  //  onChange={handleChange}

  return (
    <div className="flex min-w-[250px] flex-col h-full w-full relative">
      <label
        className={`bg-white ${
          props.touched && props.error ? "text-red-600" : "text-[#919EAB]"
        } text-xs font-light absolute left-6 -top-2 `}
      >
        {props.label}
      </label>
      <input
        {...props}
        name={props.name}
        className={`flex flex-col w-full rounded-lg min-h-[40px] border placeholder:text-[#212B36] font-poppins ${
          props.touched && props.error
            ? "border-red-600 border"
            : "border-[#919EAB52]"
        }  px-4`}
      />
    </div>
  );
};
