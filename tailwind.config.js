const plugin = require("tailwindcss");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./globalElements/**/*.{js,ts,jsx,tsx}",
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
        "header-gradient":
          "linear-gradient(90deg, rgba(82,184,171,1) 0%, rgba(82,184,171,1) 41%, rgba(1,185,255,1) 100%)",
      },
      textFillColor: {
        transparent: "transparent",
      },
      backgroundClip: {
        text: "text",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "14px",
          },
        ],
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // animate'lerde animate-delay-100 diyerek 100ms delay eklenebilir.
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
    require("tailwind-scrollbar"), // Scrollbar eklentisini
    function ({ addUtilities }) {
      addUtilities({
        ".home-Input": {
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          borderRadius: "1rem",
          width: "100%",
          height: "40px",
          background: "#f1f5f9",
        },
        ".card": {
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
          borderRadius: "1rem",
          padding: "1rem",
        },
        ".card-children": {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        },
      });
    },
  ],
  variants: {
    scrollbar: ["rounded"], // Yuvarlatılmış scrollbar
  },
};
