/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example app's own components
    './src/**/*.{js,jsx,ts,tsx}',
    // We use metro resolver plugin to add an alias for the library. Therefore, we need to add the alias path to the content array.
    '../src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
