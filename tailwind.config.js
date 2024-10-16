/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollbar: {
        thin: {
          thumb: 'rounded-full bg-gray-400', // style the scrollbar thumb
          track: 'bg-transparent', // style the scrollbar track
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

