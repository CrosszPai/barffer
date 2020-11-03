module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        barffer: {
          bg: "#F8F5F2",
          text: "#3E4462",
          "link-active": "#EDA345",
        },
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
