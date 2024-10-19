export default {
  plugins: [],
  theme: {
    colors: {
      "white-opaque": "rgba(255, 255, 255, 0.2)",
      "white-hover": "rgba(255, 255, 255, 0.1)",
      "primary-color": "#F5FF00",
      "light-color": "#fff",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
        20: "70px",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
