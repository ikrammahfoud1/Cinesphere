module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rouge: {
          1: "#c50e0f",
          2: "#640c0d",
          3: "#240f11",
        },
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite alternate",
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        glow: {
          "0%": {
            textShadow:
              "0 0 15px rgba(255, 77, 77, 0.8), 0 0 30px rgba(255, 77, 77, 0.5)",
          },
          "100%": {
            textShadow:
              "0 0 25px rgba(255, 77, 77, 1), 0 0 50px rgba(255, 77, 77, 1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
