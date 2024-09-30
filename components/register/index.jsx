"use client";
import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

export default function RegisterComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [countries, setCountries] = useState([]);
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  // Form alanlarını güncelleme fonksiyonu
  const setField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Ülkeleri ayarla
  useEffect(() => {
    const fetchedCountries = Country.getAllCountries();
    setCountries(fetchedCountries);
  }, []);

  // Ülke değiştiğinde eyaletleri güncelle
  useEffect(() => {
    if (formData.country) {
      const states = State.getStatesOfCountry(formData.country);
      setAvailableStates(states);
      setAvailableCities([]); // Yeni ülke seçildiğinde şehirleri sıfırla
      setField("state", ""); // State'i sıfırla
      setField("city", ""); // City'i sıfırla
    } else {
      setAvailableStates([]);
      setAvailableCities([]);
    }
  }, [formData.country]);

  // Eyalet değiştiğinde şehirleri güncelle
  useEffect(() => {
    if (formData.state) {
      const cities = City.getCitiesOfState(formData.country, formData.state);
      setAvailableCities(cities);
    } else {
      setAvailableCities([]);
    }
  }, [formData.state, formData.country]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }
    setPasswordError("");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-2xl">
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
              value={formData.name}
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
              value={formData.phoneNumber}
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
              value={formData.email}
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
                className="block  font-medium text-gray-700"
              >
                {" "}
                Country<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  list="countries"
                  id="country"
                  name="country"
                  required
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.country}
                  onChange={(e) => setField("country", e.target.value)}
                  placeholder="Select or enter a country"
                />
                <datalist id="countries">
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </datalist>
              </div>
            </div>

            {/* State */}
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="state"
                className="block font-medium text-gray-700"
              >
                State<span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  list="states"
                  id="state"
                  name="state"
                  required
                  className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.state}
                  onChange={(e) => setField("state", e.target.value)}
                  placeholder="Select or enter a state"
                  disabled={!availableStates.length}
                />
                <datalist id="states">
                  {availableStates.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </datalist>
              </div>
            </div>
          </div>
          {/* City */}
          <div className="w-full">
            <label htmlFor="city" className="block font-medium text-gray-700">
              City<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                list="cities"
                id="city"
                name="city"
                required
                className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm font-poppins rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.city}
                onChange={(e) => setField("city", e.target.value)}
                placeholder="Select or enter a city"
                disabled={!availableCities.length}
              />
              <datalist id="cities">
                {availableCities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </datalist>
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
              value={formData.password}
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
              className="block  font-medium text-gray-700"
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
                value={formData.confirmPassword}
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
