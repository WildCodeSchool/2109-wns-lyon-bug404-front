module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#129DA4",
        secondary: {
          100: "#FC5B56",
          200: "#FFD7D6",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
  ],
};
