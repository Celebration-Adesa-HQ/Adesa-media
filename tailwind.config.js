import { heroui } from "@heroui/theme";

const config = {
  darkMode: "class",
  content: [
    "./app//*.{js,ts,jsx,tsx}",
    "./components//.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-blue": "#151e47",
        "brand-orange": "#ffa205",
        "brand-dark": "#2b2b2b",
        "brand-light": "#f6efea",
        "background-light": "#FAFAF9",
        "background-dark": "#111827",
        "teal-process": "#52A5B3",
        "green-process": "#80B698",
        "sage-process": "#B4C4B1",
        "dark-gray-process": "#5A5A5A",
        "mid-gray-process": "#828282",
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
    },
  },
  plugins: [heroui()],
};

export default config