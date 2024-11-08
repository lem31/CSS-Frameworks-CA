/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./auth/**/*.{html,js,ts,jsx,tsx}",
    "./profile/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "641px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
