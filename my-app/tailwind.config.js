/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black_1: "#212529",
        black_2: "#333333",
        white_1: "#ffffff",
        white_2: "#efefef",
        border_1: "#d1d1d1",
        red_1: "#ff937d",
        red_2: "#b35440",
        red_3: "#b33a20",
        green_1: "#b1e36f",
        green_2: "#93ad74",
        gray_1: "#c9c9c9",
        gray_2: "#8a8a8a",
        gray_3: "#525251",
        overlay: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
