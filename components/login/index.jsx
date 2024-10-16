"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // useRouter import

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginComponent() {
  const router = useRouter(); // router instance

  const handleSubmit = async (values) => {
    // Login operations will be performed here
    console.log("Attempt to enter:", values);

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false, // disable automatic redirect
    });

    if (res.ok) {
      router.push("/"); // Navigate to homepage on successful login
      // Show success message (e.g., Snackbar or Toast)
    } else {
      // Show error message (e.g., Snackbar or Toast)
      console.log(res.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 lg:mb-8">
          Medyanes<span className="text-teal-500">360</span>
        </h2>
        <h1 className="text-lg sm:text-xl font-semibold text-start text-gray-700 mb-4 sm:mb-6">
          Sign in
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4 sm:space-y-6 w-full">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address or phone number
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email or phone number"
                  className={`w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Sign in
              </button>
              {/* Auth ile giriş yapma  */}
              <div className="mt-6">
                <button
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  onClick={() => signIn("linkedin")}
                >
                  Sign in with Linkedin
                </button>
              </div>

              <div className="mt-6">
                <button
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  onClick={() => signIn("twitter")}
                >
                  Sign in with Twitter
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex flex-row justify-between mt-5">
          <a
            href="/register"
            className="text-xs sm:text-sm text-black hover:underline"
          >
            Not a member yet?
          </a>
          <a href="#" className="text-xs sm:text-sm text-black hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
