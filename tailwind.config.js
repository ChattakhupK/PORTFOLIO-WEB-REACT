/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "calc-customXL": "calc(100% - 20rem)",
        // เพิ่มค่า maxWidth แบบ custom
        "calc-customLG": "calc(100% - 15rem)",
        // เพิ่มค่า maxWidth แบบ custom
        "calc-customMD": "calc(100% - 10rem)",
        // เพิ่มค่า maxWidth แบบ custom
        "calc-customSM": "calc(100% - 5rem)",
        // เพิ่มค่า maxWidth แบบ custom
      },
    },
  },
  plugins: [],
};
