module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darken: "#1A262B",
          "red-text": " #D25127",
          "white-text": "#FFFFFF",
        },
        indicators: {
          "light-dark-text": "#223137",
          "gradient-yellow": "#FCBF20",
        },
        button: {
          "bg-button": "#F38810",
        },
      },
    },
  },
  plugins: [],
};
