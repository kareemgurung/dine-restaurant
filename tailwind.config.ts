import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ready-bg-mobile": "url('/images/homepage/ready-bg-mobile.jpg')",
        "ready-bg-tablet": "url('/images/homepage/ready-bg-tablet.jpg')",
        "ready-bg-desktop": "url('/images/homepage/ready-bg-desktop.jpg')",
        "ready-bg-large-desktop":
          "url('/images/homepage/ready-bg-desktop@2x.jpg')",
        "bottomm-right":
          'url("/images/patterns/pattern-curve-bottom-right.svg")',
        "top-left": 'url("/images/patterns/pattern-curve-top-left.svg")',
        "top-right": 'url("/images/patterns/pattern-curve-top-right.svg")',
        "hero-bg-mobile": 'url("/images/homepage/hero-bg-mobile@2x.jpg")',
        "hero-bg-tablet": 'url("/images/homepage/hero-bg-tablet@2x.jpg")',
        "hero-bg-desktop": 'url("/images/homepage/hero-bg-desktop@2x.jpg")',
        "booking-bg-mobile": 'url("/images/booking/hero-bg-mobile@2x.jpg")',
        "booking-bg-tablet": 'url("/images/booking/hero-bg-tablet@2x.jpg")',
        "booking-bg-desktop": 'url("/images/booking/hero-bg-desktop@2x.jpg")',

      },
      colors: {
        beaver: "#9E7F66",
        "cod-gray": "#111111",
        mirage: "#17192B",
        "ebony-clay": "#242B37",
        "shuttle-gray": "#5C6779",
        "event-gray": "#4C4C4C",
        "silver-gray": "#8e8e8e",
        red: "#B54949",
      },
      screens: {
        lg: "1440px",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        xl: "1.0625rem",
        "2xl": "1.25rem",
        "3xl": "2rem",
        "4xl": "3rem",
        "5xl": "5rem",
      },
      backgroundSize: {
        "100": "100% 100%",
      },
      backgroundPosition: {
        "reservation-mobile": "top",
        "events-bg-tablet": "-517px 0",
        "events-bg-desktop": "-350px 0",
      },
      boxShadow: {
        "3xl": "0px 75px 100px -50px rgba(56, 66, 85, 0.50)",
      },
    },
  },
  plugins: [],
};
export default config;
