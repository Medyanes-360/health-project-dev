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

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        xs: "0px",
      },
      colors: {
        primary: {
          DEFAULT: "#52B8AB",
          dark: "#0B8071",
          light: "rgba(175, 255, 245, 0.3)",
        },
        black: {
          DEFAULT: "#000000",
          light: "#18191C",
          dark: "#1E1E1E",
        },
        white: {
          DEFAULT: "#FFFFFF",
          // gri renk:
          dark: "#F1F2F4",
          // disabled field'lar için:
          // disabled:""
        },
        secondary: "#52B8AB",
        bgDarkWhite: "#F1F2F4",
        bgDarkText: "#5E6670",
        secondary: "#111827",
        third: "#7D7987",
        fourth: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
