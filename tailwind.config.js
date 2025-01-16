/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "light-coffee": "#C89F94",
      },
      fontFamily: {
        Karla: ["Karla", "serif"],
      },
      colors: {
        coffee: {
          200: "#C89F94",
          400: "#A25F4B",
        },
      },
      screens: {
        sm: "640px",
        "sm-max": { max: "640px" },

        md: "768px",
        "md-max": { max: "768px" },

        lg: "1024px",
        "lg-max": { max: "1024px" },

        xl: "1280px",
        "xl-max": { max: "1280px" },

        "2xl": "1536px",
        "2xl": { max: "1536px" },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out",
      },
      maxWidth: {
        "max-slider-width": "1440px",
      },
      minWidth: {
        "mini-slider-width": "880px",
      },
    },
  },
  plugins: [],
};
