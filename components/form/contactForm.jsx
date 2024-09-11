"use client";
import ButtonComponent from "@/globalElements/Button";
import CustomInput from "@/globalElements/input";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handlePhoneChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, phone: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomInput
        type="phone"
        name="phone"
        onChange={handlePhoneChange}
        placeholder="Enter your phone number"
        value={form.phone}
        css={true}
        className="w-full h-[40px] bg-slate-100 py-3 px-5 border-none focus:border-primary rounded-2xl"
      />
      <CustomInput
        type="input"
        name="name"
        onChange={handleInputChange}
        placeholder="Enter your name"
        value={form.name}
        className=""
      />
      <CustomInput
        type="input"
        name="email"
        onChange={handleInputChange}
        placeholder="Enter your email"
        value={form.email}
        className=""
      />
      <CustomInput
        type="textarea"
        name="message"
        onChange={handleInputChange}
        placeholder="Enter your message"
        value={form.message}
        className=""
      />
      <div className="w-full flex justify-end">
        <ButtonComponent
          className="bg-primary text-white rounded-2xl w-[50%] lg:w-fit"
          type="submit"
          containerClassName={"flex justify-end w-full"}
          title={"Submit"}
        />
      </div>
    </form>
  );
};

export default ContactForm;
