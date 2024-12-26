import React from "react";
import { Formik, Field, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import { DatePickerWithLabel } from "@/globalElements/datePickerWithLabel";

const formatDate = (date) => {
  if (!date || isNaN(new Date(date).getTime())) {
    return ""; // Geçersiz tarihleri işlemez, boş string döner
  }
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
};

const ExportEnquiries = () => {
  return (
    <div className="w-full bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      <h1 className="text-xl font-medium mb-8">Export enquiries</h1>
      <div>
        <h2 className="mb-4">Export options :</h2>
        <Formik
          initialValues={{
            picked: "",
            startDate: "", // Tarih alanı için başlangıç değeri
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="flex flex-col gap-4"
              >
                <label className="flex gap-2">
                  <Field
                    type="radio"
                    name="picked"
                    value="Active enquiries only"
                  />
                  Active enquiries only
                </label>
                <label className="flex gap-2">
                  <Field
                    type="radio"
                    name="picked"
                    value="Reported Enquiries"
                  />
                  Reported Enquiries
                </label>
                <label className="flex gap-2">
                  <Field type="radio" name="picked" value="All enquiries" />
                  All enquiries
                </label>
              </div>
              <div>
                <h2 className="mb-4 mt-4 font-small">Start date:</h2>
                <input
                  type="date"
                  name="startDate"
                  className="border rounded p-2 w-full"
                  value={values.startDate}
                  errors={errors.startDate}
                  touched={touched.startDate}
                  onChange={(e) => {
                    const formattedDate = formatDate(e.target.value); // Tarih formatını ayarla
                    setFieldValue("startDate", formattedDate); // Formik state'ini güncelle
                  }}
                />
                <DatePickerWithLabel
                  type="date"
                  name="endDate"
                  className="border rounded p-2 w-full"
                  value={values.endDate}
                  errors={errors.endDate}
                  touched={touched.endDate}
                  onChange={(e) => {
                    const formattedDate = formatDate(e.target.value); // Tarih formatını ayarla
                    setFieldValue("endDate", formattedDate); // Formik state'ini güncelle
                  }}
                />
              </div>
              <div className="w-full flex justify-end mt-6">
                <ButtonComponent
                  type="submit"
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px]"
                >
                  <p className="text-sm">Save</p>
                </ButtonComponent>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ExportEnquiries;
