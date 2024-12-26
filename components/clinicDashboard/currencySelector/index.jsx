"use client";

import { SelectWithLabel } from "@/globalElements/selectWithLabel";
import ButtonComponent from "@/globalElements/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function CurrencySelector() {
  const currencyOptions = ["TRY", "USD", "EUR"];

  const validationSchema = Yup.object({
    currency: Yup.string().required("Lütfen bir döviz seçin."),
  });

  return (
    <div className="py-8 px-3 font-inter flex flex-col gap-8 bg-white rounded-[32px]">
      <h1 className="text-xl font-semibold">Currency</h1>
      <p className="text-sm">
        Only add languages in which your clinic can deal with patients.
      </p>
      <Formik
        initialValues={{ currency: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Seçilen döviz:", values.currency);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => {
          // console.log("touched", touched);
          // console.log("values", values);
          return (
            <Form className="flex flex-col space-y-4">
              <SelectWithLabel
                name="currency"
                label="Select"
                options={currencyOptions}
                error={errors.currency}
                touched={touched?.currency}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.currency && touched.currency && (
                <div className="text-red-600 text-sm">{errors.currency}</div>
              )}

              <div className="w-full flex justify-end">
                <ButtonComponent
                  type="submit"
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px] select-none"
                >
                  <p className="text-sm">save</p>
                </ButtonComponent>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
