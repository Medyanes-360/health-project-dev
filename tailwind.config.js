/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#52B8AB",
        secondary: '#111827',
        third: '#7D7987'
      },
    },
    fontFamily: {
      poppinsMedium: ["var(--font-poppinsMedium)"],
      poppinsRegular: ["var(--font-poppinsRegular)"],
    },
  },
  plugins: [],
};
