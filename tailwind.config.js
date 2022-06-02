module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      heading: "Raleway, sans-serif",
      body: "Roboto, sans-serif",
    },

    extend: {
      rotate: {
        330: "330deg",
      },

      backgroundImage: {
        "button-gradient":
          "linear-gradient(90deg, rgba(117,208,77,1) 0%, rgba(147,218,214,1) 100%);",
      },
    },
  },
  plugins: [],
};
