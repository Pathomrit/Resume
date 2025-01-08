/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: {
      primaryTitle: "#41826e",
      primaryBg:"#F6FCDF",
      primaryContent: "#A6E3E9",
      primarySubcontent: "#9EDF9C",
      primaryBase: "#E3FDFD",
      primarySubBg: "#F1F0E8",
      primaryFacebook: "#4267B2",
    } },
  },
  plugins: [],
};
