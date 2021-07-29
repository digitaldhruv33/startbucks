const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gold: "#cba258",
      grey: colors.gray,
      white: colors.white,
      black: colors.black,
    },

    fontFamily: {
      sans: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      mono: "'ui-monospace', 'SFMono-Regular'",
    },

    extend: {
      fontSize: {
        13: "0.8125rem",
      },

      backgroundImage: {
        hero: "url('./images/star-background.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
