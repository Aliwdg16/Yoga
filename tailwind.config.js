/**
 *
 * @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'my-imge1': "url(.\background_section_7.jpg)"
      }
    },
  },
  plugins: [daisyui],
};
