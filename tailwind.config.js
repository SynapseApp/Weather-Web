/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      backgroundImage: {
        backgroundImageSunny: "url('https://cdn.pixabay.com/photo/2018/03/23/16/55/sunset-3254253_1280.jpg')",
      },
    },
  },
  plugins: [],
};
