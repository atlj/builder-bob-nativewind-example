// const libraryPath = require.resolve('react-native-nativewind-example/package.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example app's own components
    './src/**/*.{js,jsx,ts,tsx}',
    // Since we are using metro resolver for development, we need to add the library's source. You should delete this line
    // if you are installing the library as a dependency to another project
    '../src/**/*.{js,jsx,ts,tsx}',
    // If you are installing the library as a dependency, you'll want to uncomment this line
    // `${libraryPath}/src/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
