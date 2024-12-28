"use client";

import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";

export default function ClinicServiceForm() {
  const [initialValues, setInitialValues] = useState({
    emergencyService: {
      isAvailable: false,
      description: "",
    },
    textMessageReminders: {
      isAvailable: false,
      description: "",
    },
    homeVisits: {
      isAvailable: false,
      description: "",
    },
    openTwentyFour: {
      isAvailable: false,
      description: "",
    },
    openWeekends: {
      isAvailable: false,
      description: "",
    },
  });

  useEffect(() => {
    setInitialValues({
      emergencyService: {
        isAvailable: true,
        description: "Emergency services are available 24/7.",
      },
      textMessageReminders: {
        isAvailable: true,
        description: "We send text message reminders for appointments.",
      },
      homeVisits: {
        isAvailable: false,
        description: "Home visits are not available at the moment.",
      },
      openTwentyFour: {
        isAvailable: true,
        description: "We are open 24 hours a day, 7 days a week.",
      },
      openWeekends: {
        isAvailable: true,
        description: "We are open on weekends as well.",
      },
    });
  }, []);

  const validationSchema = Yup.object().shape({
    emergencyService: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    textMessageReminders: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    homeVisits: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    openTwentyFour: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    openWeekends: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
  });
  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Clinic services</h1>
      <p className="text-sm">
        Please tick all the patient services which you offer. Please tick no for
        any you do not offer. If you are unsure of a service, you may tick
        neither and return to this list later.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          setSubmitted(true);
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
          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
            >
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Emergency service</h3>
                  <Toggle
                    name="emergencyService.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.emergencyService.isAvailable}
                  name="emergencyService.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Text message reminders</h3>
                  <Toggle
                    name="textMessageReminders.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.textMessageReminders.isAvailable}
                  name="textMessageReminders.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Home visits</h3>
                  <Toggle
                    name="homeVisits.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.homeVisits.isAvailable}
                  name="homeVisits.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Open 24 hours</h3>
                  <Toggle
                    name="openTwentyFour.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.openTwentyFour.isAvailable}
                  name="openTwentyFour.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Open weekends</h3>
                  <Toggle
                    name="openWeekends.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.openWeekends.isAvailable}
                  name="openWeekends.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
