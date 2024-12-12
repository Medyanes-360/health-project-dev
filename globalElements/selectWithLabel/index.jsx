export const SelectWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////
  //  component={SelectWithLabel}
  //  as="select"
  //  name="name"
  //  label="Name"
  //  options={[1, 2, 3]}
  //  error={errors.name}
  //  isTouched={touched.name}
  //  onBlur={handleBlur}
  //  onChange={handleChange}

  return (
    <div className="flex flex-col h-full w-full relative">
      <label
        className={`bg-white ${
          props.isTouched && props.error ? "text-red-600" : "text-[#919EAB]"
        } text-xs font-light absolute left-6 -top-2 `}
      >
        {props.label}
      </label>
      <select
        style={{ WebkitAppearance: "none", backgroundPositionX: "97%" }}
        {...props}
        name={props.field.name}
        className={`bg-[url('/assets/icons/selectArrow.svg')] bg-right bg-no-repeat flex flex-col w-full rounded-lg min-h-[40px] border ${
          props.isTouched && props.error
            ? "border-red-600 border"
            : "border-[#919EAB52]"
        }  py-2 px-4 `}
      >
        {/* Boş seçenek */}
        <option value={null}></option>
        {props.options?.map((option, i) => {
          return (
            <option className="" key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
