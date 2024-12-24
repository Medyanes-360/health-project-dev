import { TimePickerWithLabel } from "@/globalElements/timePickerWithLabel";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import ButtonComponent from "@/globalElements/Button";

const OpeningHours = () => {
  const labels = [
    "Monday Open",
    "Tuesday Open",
    "Wednesday Open",
    "Thursday Open",
    "Friday Open",
    "Saturday Open",
    "Sunday Open",
    "Monday Close",
    "Tuesday Close",
    "Wednesday Close",
    "Thursday Close",
    "Friday Close",
    "Saturday Close",
    "Sunday Close",
    "Monday Lunch time started",
    "Tuesday Lunch time started",
    "Wednesday Lunch time started",
    "Thursday Lunch time started",
    "Friday Lunch time started",
    "Saturday Lunch time started",
    "Sunday Lunch time started",
    "Monday Lunch time finish",
    "Tuesday Lunch time finish",
    "Wednesday Lunch time finish",
    "Thursday Lunch time finish",
    "Friday Lunch time finish",
    "Saturday Lunch time finish",
    "Sunday Lunch time finish",
  ];

  // 7'şerli gruplara ayırma
  const groupedLabels = [];
  for (let i = 0; i < labels.length; i += 7) {
    groupedLabels.push(labels.slice(i, i + 7));
  }

  // Validation Schema
  const validationSchema = Yup.object().shape(
    labels.reduce((schema, label) => {
      schema[label.replace(/ /g, "_")] = Yup.string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format")
        .required("Required");
      return schema;
    }, {})
  );

  // Initial Values
  const initialValues = labels.reduce((values, label) => {
    values[label.replace(/ /g, "_")] = "08:00"; // Her biri için başlangıç saati 08:00
    return values;
  }, {});

  return (
    <div className="bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      <h1 className="text-xl font-semibold mb-10">Opening Hours</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values); // Konsolda veriler görünmeli
          resetForm(); // Formu sıfırla
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleSubmit,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-8">
              {groupedLabels.map((group, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-8 w-full">
                  {group.map((label, index) => (
                    <TimePickerWithLabel
                      key={`${colIndex}-${index}`}
                      name={label.replace(/ /g, "_")}
                      label={label}
                      error={errors[label.replace(/ /g, "_")]}
                      touched={touched[label.replace(/ /g, "_")]}
                      onBlur={handleBlur}
                      onChange={(e) =>
                        setFieldValue(label.replace(/ /g, "_"), e.target.value)
                      }
                      value={values[label.replace(/ /g, "_")]}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="w-full flex justify-end">
              <ButtonComponent
                type="submit"
                className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px]"
              >
                <p className="text-sm">save</p>
              </ButtonComponent>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OpeningHours;
