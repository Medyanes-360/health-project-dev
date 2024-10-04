"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginComponent() {
  // Formik yapılandırması
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Giriş işlemleri burada yapılacak
      console.log("Attempt to enter:", values);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 lg:mb-8">
          Medyanes<span className="text-teal-500">360</span>
        </h2>
        <h1 className="text-lg sm:text-xl font-semibold text-start text-gray-700 mb-4 sm:mb-6">
          Sign in
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 sm:space-y-6 w-full"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address or phone number
              <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email or phone number"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </form>
        <div className="text-end mt-4">
          <a href="#" className="text-xs sm:text-sm text-black hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
