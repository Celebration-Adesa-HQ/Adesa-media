import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "24px",
        lg: "24px",
      },
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "var(--brand-blue)",
          orange: "var(--brand-orange)",
          dark: "var(--brand-dark)",
          light: "var(--brand-light)",
        },
      },
      fontFamily: {
        heading: ["Pasajero", "system-ui", "sans-serif"],
        body: ["Myriad Pro", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideLogo: "0.3em",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.1)",
        cardHover: "0 8px 24px rgba(0,0,0,0.15)",
        button: "0 4px 12px rgba(255,162,5,0.3)",
      },
      transitionTimingFunction: {
        smooth: "ease",
      },
    },
  },
  plugins: [heroui()],
};

export default config;
