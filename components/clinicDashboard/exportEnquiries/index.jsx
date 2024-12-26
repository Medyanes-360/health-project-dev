import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ButtonComponent from "@/globalElements/Button";
import { DatePickerWithLabel } from "@/globalElements/datePickerWithLabel";
import { formatDate, toHtmlDateFormat } from "./dateUtils";

const validationSchema = Yup.object().shape({
  picked: Yup.string()
    .required("Please select an export option"),
  startDate: Yup.string()
    .required("Start date is required")
    .test("valid-date", "Invalid date format", (value) => {
      if (!value) return false;
      return /^\d{2}\.\d{2}\.\d{4}$/.test(value);
    }),
  endDate: Yup.string()
    .required("End date is required")
    .test("valid-date", "Invalid date format", (value) => {
      if (!value) return false;
      return /^\d{2}\.\d{2}\.\d{4}$/.test(value);
    })
    .test("date-range", "End date must be after start date", function(value) {
      const { startDate } = this.parent;
      if (!startDate || !value) return true;
      const start = new Date(startDate.split('.').reverse().join('-'));
      const end = new Date(value.split('.').reverse().join('-'));
      return end >= start;
    })
});

const ExportEnquiries = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Add your API call here
      console.log(values);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      <h1 className="text-xl font-medium mb-8">Export enquiries</h1>
      <div>
        <h2 className="mb-4">Export options :</h2>
        <Formik
          initialValues={{
            picked: "",
            startDate: "",
            endDate: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue, handleBlur, isSubmitting }) => (
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
                {errors.picked && touched.picked && (
                  <div className="text-red-500 text-sm">{errors.picked}</div>
                )}
              </div>
              <h2 className="mb-4 mt-4 font-small" >Start date</h2>

              <div className="mt-4 flex gap-4">
                <DatePickerWithLabel
                  name="startDate"
                  label="Start date"
                  value={toHtmlDateFormat(values.startDate)}
                  error={errors.startDate}
                  touched={touched.startDate}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    const formattedDate = formatDate(e.target.value);
                    setFieldValue("startDate", formattedDate);
                  }}
                />

                <DatePickerWithLabel
                  name="endDate"
                  label="End date"
                  value={toHtmlDateFormat(values.endDate)}
                  error={errors.endDate}
                  touched={touched.endDate}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    const formattedDate = formatDate(e.target.value);
                    setFieldValue("endDate", formattedDate);
                  }}
                />
              </div>

              <div className="w-full flex justify-end mt-6">
                <ButtonComponent
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px]"
                >
                  <p className="text-sm">{isSubmitting ? 'Saving...' : 'Save'}</p>
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