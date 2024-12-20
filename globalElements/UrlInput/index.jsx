export const UrlInputWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////
  //  name="url"
  //  label="Add Link:"
  //  placeholder="www"
  //  error={errors.url}
  //  touched={touched.url}
  //  onBlur={handleBlur}
  //  onChange={handleChange}
  //  component={urlInput}
  //  value={values.url}

  return (
    <div
      className={`bg-[#F4F6F8] flex w-full h-fit rounded-lg border-dashed border ${
        props.touched && props.error ? "border-red-600" : "border-[#919EAB52]"
      }`}
    >
      <label
        className={`w-fit text-sm flex items-center justify-center px-4 whitespace-nowrap break-keep`}
      >
        {props.label}
      </label>
      <input
        {...props}
        type="url"
        className={`bg-[#F4F6F8] flex flex-col justify-center w-full rounded-lg min-h-[40px] bg-[url('/assets/icons/link.svg')] bg-[97%] bg-no-repeat`}
      />
    </div>
  );
};
