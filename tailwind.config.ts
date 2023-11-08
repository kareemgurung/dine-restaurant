import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beaver: "#9E7F66",
        "cod-gray": "#111111",
        mirage: "#17192B",
        "ebony-clay": "#242B37",
        "shuttle-gray": "#5C6779",
      },
      screens: {
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
