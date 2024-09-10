"use client";

import ButtonComponent from "@/globalElements/Button";
import CardComponent from "@/globalElements/Card";
import CustomInput from "@/globalElements/input";
import { useState } from "react";

const GetFreeConsolationForm = () => {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    name: "",
    description: "",
    agreed: false,
  });

  const [error, setError] = useState({
    errorContent: "",
    isError: false,
  });

  const handlePhoneChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, phone: value }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <CardComponent className="flex-1 w-full rounded-none rounded-r-2xl">
      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <div className="space-y-1">
          <label htmlFor="phone">Enter your phone number</label>

          <CustomInput
            type="phone"
            name="phone"
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            value={form.phone}
            className="w-full h-[40px] bg-white py-3 px-5 border border-third  rounded-md"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Enter your Email</label>

          <CustomInput
            type="input"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your Email"
            value={form.email}
            className="w-full h-[40px] bg-white py-3 px-5 border border-third rounded-md"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="name">Enter your name</label>

          <CustomInput
            type="input"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter your name"
            value={form.name}
            className="w-full h-[40px] bg-white py-3 px-5 border border-third rounded-md"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="description">Enter your description</label>

          <CustomInput
            type="textarea"
            name="description"
            onChange={handleInputChange}
            placeholder="Short description"
            value={form.description}
            className="w-full bg-white py-3 px-5 border border-third rounded-md"
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            onChange={handleInputChange}
            name={"agreed"}
            type="checkbox"
            value={form.agreed}
            className="h-12 w-12"
          />
          <label htmlFor="agree">
            I agree to the Terms of use Privacy policy and receive marketing
            letters that may be of interest. This site is protected by reCAPTCHA
            and the Google Privacy Policy andTerms of Service apply.
          </label>
        </div>

        <div className="w-full flex justify-end">
          <ButtonComponent
            className="bg-primary text-white rounded-md w-[50%] lg:w-fit"
            type="submit"
            containerClassName={"flex justify-end w-full"}
            title={"Send Request"}
          />
        </div>
      </form>
    </CardComponent>
  );
};

export default GetFreeConsolationForm;
