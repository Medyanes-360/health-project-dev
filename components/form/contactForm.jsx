"use client";
import CustomButton from "@/globalElements/Button";
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
      />
      <CustomInput
        type="input"
        name="name"
        onChange={handleInputChange}
        placeholder="Enter your name"
        value={form.name}
      />
      <CustomInput
        type="input"
        name="email"
        onChange={handleInputChange}
        placeholder="Enter your email"
        value={form.email}
      />
      <CustomInput
        type="textarea"
        name="message"
        onChange={handleInputChange}
        placeholder="Enter your message"
        value={form.message}
      />
      <CustomButton
        type="submit"
        containerClassName={"flex justify-end"}
        title={"Submit"}
      />
    </form>
  );
};

export default ContactForm;
