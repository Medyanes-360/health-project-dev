"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import RichTextEditor from "@/globalElements/richTextEditor";
import { useEffect, useRef, useState } from "react";

export const ClinicDescriptionForm = () => {
  const validationSchema = Yup.object().shape({
    description: Yup.array(),
  });

  const [value, setValue] = useState([
    {
      type: "paragaph",
      children: [{ text: "" }],
    },
  ]);
  const formikRef = useRef(null);
  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Clinic Description</h1>
      <p>Preview my changes (remember to save first!)</p>
      <p>
        Please enter the description of your clinic to be shown in your
        brochure. You should try to describe the best features of your clinic.
        Please do not include contact information such as email, phone number or
        website address. Extra formatting will be cleaned from this text.
      </p>

      <Formik
        innerRef={formikRef}
        initialValues={{
          description: {
            type: "paragaph",
            children: [{ text: "" }],
          },
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          setSubmitted(true);
          resetForm(); // Reset form after submission
        }}
      >
        {({ setFieldValue, handleSubmit, values }) => {
          // Rich text editor valusunu manuel olarak form state'ine ekler
          useEffect(() => {
            setFieldValue("description", value);
          }, [value]);

          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
            >
              <div className="w-full flex gap-3 flex-col">
                <RichTextEditor
                  name="description"
                  placeholder="Write something awesome..."
                  value={value}
                  setValue={setValue}
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-end">
                <ButtonComponent
                  type="submit"
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px] "
                >
                  <p className="text-sm">save</p>
                </ButtonComponent>
              </div>

              {/* Display confirmation message after form submission */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
