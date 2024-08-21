/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        // ! border color
        'border-gray': '#D1D5DB',
        // ! text color
        'text-gray': '#4B5563',
        // ! background color
        'bg-gray': '#f7f7f8',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
}
