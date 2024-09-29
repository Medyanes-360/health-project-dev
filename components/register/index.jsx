"use client";
import useRegisterStore from "@/utils/authStore/registerStore";
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

export default function RegisterComponent() {
  const {
    name,
    email,
    phoneNumber,
    country,
    state,
    city,
    password,
    confirmPassword,
    setField,
    cities,
    states,
    setCountries,
    setStates,
    setCities,
  } = useRegisterStore();

  const [passwordError, setPasswordError] = useState("");
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  // Ülkeleri ayarla
  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountries(countries); // Zustand state yönetimi ile ayarlama
  }, []);

  // Ülke değiştiğinde, eyaletleri güncelle
  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country);
      setAvailableStates(states);
      setAvailableCities([]); // Yeni ülke seçildiğinde şehirleri sıfırla
      setField("state", ""); // State'i sıfırla
      setField("city", ""); // City'i sıfırla
    } else {
      setAvailableStates([]);
      setAvailableCities([]);
    }
  }, [country]);

  // Eyalet değiştiğinde, şehirleri güncelle
  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(country, state);
      setAvailableCities(cities);
    } else {
      setAvailableCities([]);
    }
  }, [state, country]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }
    setPasswordError("");
    console.log("Form submitted:", {
      name,
      email,
      phoneNumber,
      country,
      state,
      city,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Medyanes<span className="text-teal-500">360</span>
        </h2>
        <h1 className="text-lg sm:text-xl font-semibold font-poppins text-start text-gray-700 mb-4 sm:mb-6">
          Sign up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium font-poppins text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setField("name", e.target.value)}
              className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium font-poppins text-gray-700">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setField("phoneNumber", e.target.value)}
              className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium font-poppins text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setField("email", e.target.value)}
              className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          {/* Country and State */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={country}
                  onChange={(e) => setField("country", e.target.value)}
                >
                  <option value="">Select a country</option>
                  {Country.getAllCountries().map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="state"
                  name="state"
                  required
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={state}
                  onChange={(e) => setField("state", e.target.value)}
                  disabled={!availableStates.length}
                >
                  <option value="">Select a state</option>
                  {availableStates.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="city"
                name="city"
                required
                className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={city}
                onChange={(e) => setField("city", e.target.value)}
                disabled={!availableCities.length}
              >
                <option value="">Select a city</option>
                {availableCities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="block mb-1 font-medium font-poppins text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setField("password", e.target.value)}
              className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Password Verification */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Enter your confirm password"
                className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={confirmPassword}
                onChange={(e) => setField("confirmPassword", e.target.value)}
              />
            </div>
          </div>
          {passwordError && (
            <div className="text-red-500 text-sm mt-1">{passwordError}</div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
