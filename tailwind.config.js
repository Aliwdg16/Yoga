import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#b2f0d9", // Define your custom color
      },
    },
  },
  plugins: [daisyui],
};
