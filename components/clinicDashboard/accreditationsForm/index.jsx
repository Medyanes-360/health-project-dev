"use client";
import { Formik, Form, ErrorMessage } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import { UrlInputWithLabel } from "@/globalElements/UrlInputWithLabel";

export const AccreditationsForm = () => {
  const validationSchema = Yup.object().shape({
    institution: Yup.string().min(5).required("required"),
    url: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    isAccredited: Yup.boolean(),
  });

  const data = [
    {
      institution: "Türk Standartlar Enstitüsü",
      url: "www.tse.com",
      isAccredited: false,
    },
  ];

  return (
    <div className="py-8 px-3 font-inter flex flex-col gap-8 bg-white rounded-[32px]">
      <h1 className="text-xl font-semibold">Accreditations</h1>
      <div className="text-sm">
        <div className="space-y-1">
          <p>List of institutions that accredited my clinic:</p>
          <ul className="p-2">
            {data.map((institution, i) => {
              return (
                <li key={i}>
                  <div className="flex flex-col">
                    <span className="flex gap-2">
                      <p className="font-bold">Institution:</p>
                      <p>{institution.institution}</p>
                    </span>
                    <span className="flex gap-2">
                      <p className="font-bold">Accreditation Link:</p>
                      <p>{institution.url}</p>
                    </span>
                    <span className="flex gap-2">
                      <p className="font-bold">Status:</p>
                      <p
                        className={`${
                          institution.isAccredited
                            ? "text-green-400"
                            : " text-orange-300"
                        }`}
                      >
                        {institution.isAccredited ? "Accredited !" : "Pending"}
                      </p>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Formik
        initialValues={{ institution: "", url: "", isAccredited: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit!", values);
          resetForm();
        }}
      >
        {({ errors, touched, values, handleBlur, handleChange }) => {
          return (
            <Form className="flex flex-col gap-6">
              <p className="font-bold">Add Institution</p>

              <div className="w-full flex gap-3 flex-col">
                <InputWithLabel
                  name="institution"
                  label="institution"
                  error={errors.institution}
                  touched={touched?.institution}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="institution"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <UrlInputWithLabel
                  name="url"
                  label="Institution URL:"
                  placeholder="www"
                  error={errors.url}
                  touched={touched.url}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.url}
                />
                <ErrorMessage
                  name="url"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
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
};
