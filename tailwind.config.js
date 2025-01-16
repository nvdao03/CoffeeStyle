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
        "2xl": "1536px",
        "2xl": { max: "1536px" },

        xl: "1280px",
        "xl-max": { max: "1280px" },

        lg: "1024px",
        "lg-max": { max: "1024px" },

        md: "768px",
        "md-max": { max: "768px" },

        sm: "640px",
        "sm-max": { max: "640px" },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fakeIn: {
          from: {
            bottom: "-60px",
          },
          to: {
            bottom: "16px",
          },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out",
        fakeIn: "fakeIn .5s ease-in-out",
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
