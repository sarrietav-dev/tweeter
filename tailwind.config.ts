import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        noto: ['var(--font-noto)'],
      },
      colors: {
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-4": "#BDBDBD"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
export default config;
