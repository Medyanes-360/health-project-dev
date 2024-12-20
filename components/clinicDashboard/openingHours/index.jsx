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
  const validationSchema = Yup.object().shape({
    "Monday Open": Yup.string().required("Required"),
    "Tuesday Open": Yup.string().required("Required"),
    "Wednesday Open": Yup.string().required("Required"),
    "Thursday Open": Yup.string().required("Required"),
    "Friday Open": Yup.string().required("Required"),
    "Saturday Open": Yup.string().required("Required"),
    "Sunday Open": Yup.string().required("Required"),
    "Monday Close": Yup.string().required("Required"),
    "Tuesday Close": Yup.string().required("Required"),
    "Wednesday Close": Yup.string().required("Required"),
    "Thursday Close": Yup.string().required("Required"),
    "Friday Close": Yup.string().required("Required"),
    "Saturday Close": Yup.string().required("Required"),
    "Sunday Close": Yup.string().required("Required"),
    "Monday Lunch time started": Yup.string().required("Required"),
    "Tuesday Lunch time started": Yup.string().required("Required"),
    "Wednesday Lunch time started": Yup.string().required("Required"),
    "Thursday Lunch time started": Yup.string().required("Required"),
    "Friday Lunch time started": Yup.string().required("Required"),
    "Saturday Lunch time started": Yup.string().required("Required"),
    "Sunday Lunch time started": Yup.string().required("Required"),
    "Monday Lunch time finish": Yup.string().required("Required"),
    "Tuesday Lunch time finish": Yup.string().required("Required"),
    "Wednesday Lunch time finish": Yup.string().required("Required"),
    "Thursday Lunch time finish": Yup.string().required("Required"),
    "Friday Lunch time finish": Yup.string().required("Required"),
    "Saturday Lunch time finish": Yup.string().required("Required"),
    "Sunday Lunch time finish": Yup.string().required("Required"),
  });

  const initialValues = {};
  labels.forEach((label) => {
    initialValues[label.replace(/ /g, "_")] = "08:00"; // Her biri için başlangıç saati olarak 08:00
  });

  return (
    <div className=" bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      <h1 className="text-xl font-semibold mb-10">Opening hours</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          resetForm(); // Reset form after submission
        }}
      >
        {({
          values,
          touched,
          errors,
          setFieldValue,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => {
          console.log("Formik Values:", values);

          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
            >
              <div style={{ display: "flex", gap: "16px", height: "100vh" }}>
                {groupedLabels.map((group, colIndex) => (
                  <div
                    key={colIndex}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    {group.map((label, index) => (
                      <TimePickerWithLabel
                        key={`${colIndex}-${index}`}
                        name={label.replace(/ /g, "_")}
                        label={label}
                        error={errors[label.replace(/ /g, "_")]}
                        touched={touched[label.replace(/ /g, "_")]}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[label.replace(/ /g, "_")]} // Burada values'ü geçiriyoruz
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
          );
        }}
      </Formik>
    </div>
  );
};

export default OpeningHours;
