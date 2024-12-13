"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Country, State, City } from "country-state-city";
import { postAPI } from "@/services/fetchAPI";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.number(),
  country: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function RegisterComponent() {
  const [countries, setCountries] = useState([]);
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    const fetchedCountries = Country.getAllCountries();
    setCountries(fetchedCountries);
  }, []);

  const handleCountryChange = (setFieldValue, country) => {
    setFieldValue("country", country);
    setFieldValue("state", "");
    setFieldValue("city", "");
    const states = State.getStatesOfCountry(country);
    setAvailableStates(states);
    setAvailableCities([]);
  };

  const handleStateChange = (setFieldValue, country, state) => {
    setFieldValue("state", state);
    setFieldValue("city", "");
    const cities = City.getCitiesOfState(country, state);
    setAvailableCities(cities);
  };

  const submitHandler = async (values) => {
    const userToAdd = {
      email: values.email,
      password: values.password,
    };

    await postAPI("/auth/register", { ...userToAdd })
      .then((res) => {
        if (res.success) {
          // SNACKBAR Kayıt işlemi başarılı, yönlendiriliyorsunuz.

          console.log(res);
        } else {
          // SNACKBAR res.error
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {});
  };

  return (
    <div className="min-h-screen flex pt-20 justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Medyanes<span className="text-teal-500">360</span>
        </h2>
        <h1 className="text-lg sm:text-xl font-semibold font-poppins text-start text-gray-700 mb-4 sm:mb-6">
          Sign up
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            country: "",
            state: "",
            city: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted:", values);
            submitHandler(values);
            setSubmitting(false);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium font-poppins text-gray-700"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 font-medium font-poppins text-gray-700"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <Field
                  type="tel"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium font-poppins text-gray-700"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="country"
                    className="block font-medium text-gray-700"
                  >
                    Country<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                    onChange={(e) =>
                      handleCountryChange(setFieldValue, e.target.value)
                    }
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="state"
                    className="block font-medium text-gray-700"
                  >
                    State<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="state"
                    className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                    onChange={(e) =>
                      handleStateChange(
                        setFieldValue,
                        values.country,
                        e.target.value
                      )
                    }
                    disabled={!availableStates.length}
                  >
                    <option value="">Select a state</option>
                    {availableStates.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block font-medium text-gray-700"
                >
                  City<span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="city"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  disabled={!availableCities.length}
                >
                  <option value="">Select a city</option>
                  {availableCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-medium font-poppins text-gray-700"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block font-medium text-gray-700"
                >
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
