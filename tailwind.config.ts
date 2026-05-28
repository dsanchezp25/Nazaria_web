import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Roboto'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#45148A",
          container: "#F3DAFF",
          on: "#FFFFFF",
          "on-container": "#2D0063",
        },
        secondary: {
          DEFAULT: "#625B71",
          container: "#E8DEF8",
        },
        tertiary: "#7D5260",
        error: "#B3261E",
        background: "#FFFBFE",
        surface: {
          DEFAULT: "#FFFBFE",
          variant: "#E7E0EC",
        },
        "on-background": "#1C1B1F",
        "on-surface": {
          DEFAULT: "#1C1B1F",
          variant: "#49454E",
        },
        outline: "#79747E",
        subtle: "#726487",
        border: "#E0DCE5",
        "accent-gold": "#D4A017",
        dark: {
          primary: "#E7B8FF",
          "on-primary": "#45148A",
          background: "#1C1B1F",
          surface: {
            DEFAULT: "#1C1B1F",
            variant: "#49454E",
          },
          "on-background": "#E6E1E6",
          "on-surface": {
            DEFAULT: "#E6E1E6",
            variant: "#CAC7D0",
          },
          outline: "#94919B",
          subtle: "#A89CBF",
          border: "#3A3147",
        },
        macarena: "#4CAF50",
        cartuja: "#00BCD4",
        triana: "#FF9800",
        nervion: "#3F51B5",
        porvenir: "#E91E63",
        centro: "#9E9E9E",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.15)",
        elevated: "0 4px 8px rgba(0, 0, 0, 0.12)",
        sheet: "0 -4px 16px rgba(0, 0, 0, 0.12)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
    },
  },
};

export default config;
