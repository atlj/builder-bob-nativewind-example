## How to install this library?

### 1. Install the dependencies

```bash
yarn add nativewind # install nativewind
yarn add --dev tailwindcss@3.2.2 # Install tailwind css v3.2.2 https://stackoverflow.com/questions/76688256/getting-error-use-processcss-thencb-to-work-with-async-plugins
yarn add react-native-nativewind-example # Install the library
```

### 2. Babel config

Go to `babel.config.js` and add the following:

```diff
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

### 3. Tailwind config

Add a `tailwind.config.js` file to the root of your project and add the following:

```js
const libraryPath = require.resolve('react-native-nativewind-example/package.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App's own components
    './src/**/*.{js,jsx,ts,tsx}',
    `${libraryPath}/src/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
```
