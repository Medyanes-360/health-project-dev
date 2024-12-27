"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import RichTextEditor from "@/globalElements/richTextEditor";
import { useEffect, useState } from "react";

export const PaymentInformationForm = () => {
  const validationSchema = Yup.object().shape({
    discounts: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    paymentPlans: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    freeInitialConsultation: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    cheques: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    creditCards: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    paymentDescription: Yup.array(),
  });

  const [value, setValue] = useState([
    {
      type: "paragaph",
      children: [
        {
          text: "Text ",
        },
        {
          text: "Bold",
          bold: true,
        },
      ],
    },
  ]);

  const [initialValues, setInititalValues] = useState({
    discounts: {
      isAvailable: false,
      description: "",
    },
    paymentPlans: {
      isAvailable: false,
      description: "",
    },
    freeInitialConsultation: {
      isAvailable: false,
      description: "",
    },
    cheques: {
      isAvailable: false,
      description: "",
    },
    creditCards: {
      isAvailable: false,
      description: "",
    },
    paymentDescription: [
      {
        type: "paragaph",
        children: [
          {
            text: "Text ",
          },
          {
            text: "Bold",
            bold: true,
          },
        ],
      },
    ],
  });
  useEffect(() => {
    const data = {
      discounts: {
        isAvailable: true,
        description: "99%",
      },
      paymentPlans: {
        isAvailable: true,
        description: "Plan 1",
      },
      freeInitialConsultation: {
        isAvailable: true,
        description: "Free consultation",
      },
      cheques: {
        isAvailable: true,
        description: "full checkup",
      },
      creditCards: {
        isAvailable: true,
        description: "Visa",
      },
      paymentDescription: [
        {
          type: "paragaph",
          children: [
            {
              text: "Text ",
            },
            {
              text: "Bold",
              bold: true,
            },
          ],
        },
      ],
    };
    setInititalValues(data);
  }, []);

  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Payment information</h1>
      <p>
        Please tick all the payment services which you offer. Please tick no for
        any you do not offer. If you are unsure of a service, you may tick
        neither and return to this list later.
      </p>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted", values);
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
                <div className="w-full flex justify-between">
                  <h3>Discounts</h3>
                  <Toggle
                    value={values.discounts.isAvailable}
                    name="discounts.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.discounts.description}
                  label="Description"
                  disabled={!values.discounts.isAvailable}
                  name="discounts.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Payment plans</h3>
                  <Toggle
                    value={values.paymentPlans.isAvailable}
                    name="paymentPlans.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.paymentPlans.description}
                  label="Description"
                  disabled={!values.paymentPlans.isAvailable}
                  name="paymentPlans.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Free initial comsultation</h3>
                  <Toggle
                    value={values.freeInitialConsultation.isAvailable}
                    name="freeInitialConsultation.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.freeInitialConsultation.description}
                  label="Description"
                  disabled={!values.freeInitialConsultation.isAvailable}
                  name="freeInitialConsultation.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Cheques</h3>
                  <Toggle
                    value={values.cheques.isAvailable}
                    name="cheques.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.cheques.description}
                  label="Description"
                  disabled={!values.cheques.isAvailable}
                  name="cheques.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Credit cards</h3>
                  <Toggle
                    value={values.creditCards.isAvailable}
                    name="creditCards.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.creditCards.description}
                  label="Description"
                  disabled={!values.creditCards.isAvailable}
                  name="creditCards.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full flex gap-3 flex-col">
                <h3>Payment description</h3>
                <RichTextEditor
                  name="paymentDescription"
                  placeholder="Please enter any other information about payment methods, credit or offers that would be important for prospective patients"
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
