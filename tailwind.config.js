/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      serif: ["Noto Serif", "Georgia"],
    },
    extend: {
      colors: {
        "primary-green": "#00B2AE",
        "dark-green": "#006d78",
        "light-yellow": "#FBFF48",
        "orange-primary": "#FD8413",
        "dark-primary": "#424242",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
