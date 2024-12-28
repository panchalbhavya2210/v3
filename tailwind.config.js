export default {
  plugins: [],
  theme: {
    screens: {
      sm: { max: "575px" },
      md: { max: "768px" },
      lg: { max: "991px" },
      lgmin: { min: "991px" },
      xl: { max: "1500px" },
      "2xl": { min: "1700px" },
    },
    colors: {
      "white-opaque": "rgba(255, 255, 255, 0.2)",
      "white-hover": "rgba(255, 255, 255, 0.1)",
      "primary-color": "#FD4F4F",
      "light-color": "#fff",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
        20: "70px",
      },
      fontSize: {
        "header-font": "64px",
        "sub-header-font": "74px",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
