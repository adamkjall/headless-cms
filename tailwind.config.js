module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      zIndex:  {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      }
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
};
