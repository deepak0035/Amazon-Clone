module.exports = {
  mode: "jit",
  purge: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        colorOne: "#f08804",
        colorTwo: "#febd69",
        colorThree: "#F3A847",
        colorBody: "#E3E6E6",
        textColor: "#007185",
        textHover: "#c7511f",
      },
      backgroundImage: {
        amazon: "url('/images/amazonClone.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
};
