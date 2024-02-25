/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#343A40',
        accent: '#3A4147',
        accent2: '#4B5359',
        lightPrimary: '#dee2e6',
        lightSecondary: '#e9ecef',
        lightAccent: '#F6F6F6'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

