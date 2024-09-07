module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      screens: {
        "2xl": "1400px",
        "3xl": "1760px", // Adding the custom 3xl breakpoint
      },
    },
    extend: {
      screens: {
        "3xl": "1760px", // Adding the custom 3xl breakpoint
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#52B8AB",
          dark: "#0B8071",
          //darker:""
          light: "rgba(175, 255, 245, 0.3)",
          //lighter:""
          // disabled:""
        },
        black: {
          DEFAULT: "#000000",
          light: "#18191C",
          //lighter:"",
          dark: "#1E1E1E",
          //darker:"",
          disabled: "#9199A3",
        },
        white: {
          DEFAULT: "#FFFFFF",
          // gri renk:
          dark: "#F1F2F4",
          //darker:""
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
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out 1 backwards",
      },
    },
  },
  plugins: [],
};
