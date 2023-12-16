import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(3rem, 21rem))",
      },
      colors: {
        "dark-blue": "#1B2330",
        "dark-blue-2": "#0B1524",
      },
    },
  },
  plugins: [],
};
export default config;
