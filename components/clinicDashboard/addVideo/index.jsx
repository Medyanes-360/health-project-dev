"use client";

import { UrlInputWithLabel } from "@/globalElements/UrlInputWithLabel";
import ButtonComponent from "@/globalElements/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AddVideo() {
  const validationSchema = Yup.object().shape({
    url: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Required"),
  });

  const initialValues = {
    url: "",
  };

  return (
    <div className="py-8 px-3 font-inter flex flex-col gap-8 bg-white rounded-[32px]">
      <h1 className="text-xl font-semibold">Add Video</h1>
      <p>Preview my changes (remember to save first!)</p>
      <div className="text-xs">
        <div className="mb-10 space-y-1">
          <p>
            To add or update the video on your brochure please copy and paste
            the link into the field below, to remove the video delete the link
            from the box below.
          </p>
          <p>Note: We only accept YouTube video links at present</p>
        </div>
        <div className="space-y-1">
          <p>To find the embed link please follow these steps:</p>
          <ul className="list-disc ml-4 space-y-1">
            <li>Browse to the video on YouTube.</li>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <li>Click on the 'Share' button beneath the video.</li>
            <li>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Copy and Paste the link provided into the 'Video Link' box and
              save.
            </li>
          </ul>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit!", values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, handleBlur, handleChange }) => {
          return (
            <Form className="flex flex-col gap-6">
              <UrlInputWithLabel
                name="url"
                label="Add Link:"
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
