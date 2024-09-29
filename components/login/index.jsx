"use client";

import useLoginStore from "@/utils/authStore/signinStore"; // Store'u içe aktar

export default function LoginComponent() {
  const { email, password, setEmail, setPassword, resetForm } = useLoginStore(); // Zustand store'dan verileri al

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada login işlemlerini gerçekleştirin
    console.log("Giriş denemesi:", email, password);
    // İsteğe bağlı olarak formu sıfırlayabilirsiniz
    // resetForm();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 lg:mb-8">
          Medyanes<span className="text-teal-500">360</span>
        </h2>
        <h1 className="text-lg sm:text-xl font-semibold text-start text-gray-700 mb-4 sm:mb-6">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
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
              type="text"
              placeholder="Enter your email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border-[0.5px] bg-primary bg-opacity-10 border-primary text-sm rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
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
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border-[0.5px] text-sm bg-primary bg-opacity-10 border-primary rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
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
