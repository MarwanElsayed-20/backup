/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/components/**/*.jsx"],
  theme: {
    extend: {
      textShadow: {
        outline:
          "4px 4px 0 #1F94AD, -4px 4px 0 #1F94AD, -4px -4px 0 #1F94AD, 4px -4px 0 #1F94AD",
        classRoom:
          "2px 2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff",
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
