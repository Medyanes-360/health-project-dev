import PhoneInput from "react-phone-number-input";

export const PhoneInputWithLabel = (props) => {
  ///////// Formik ile uyumlu proplar///////////
  //  <Field
  //  component={PhoneInputWithLabel}
  //  name="phone"
  //  label="phone"
  //  error={errors.phone}
  //  touched={touched.phone}
  //  onBlur={handleBlur}
  //  onChange={(value) => setFieldValue("phone", value)}
  //  component={PhoneInput}
  //  defaultCountry="TR"
  //  placeholder="Enter phone number"
  //  international
  //  countryCallingCodeEditable
  //  value={values.phone}
  // />
  return (
    <div
      className={`relative flex w-full h-fit flex-col rounded-2xl border ${
        props.touched && props.error ? "border-red-600" : "border-[#919EAB]"
      }`}
    >
      <label
        className={` ${
          props.touched && props.error ? "text-red-600" : "text-[#919EAB]"
        } text-xs font-light absolute left-6 -top-2 bg-white`}
      >
        {props.label}
      </label>
      <PhoneInput {...props} className={`custom-phone-input2`} />
    </div>
  );
};
