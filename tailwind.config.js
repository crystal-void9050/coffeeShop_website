/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C3D2A",
        "primary-dark": "#142E1E",
        "primary-light": "#2E5C40",
        accent: "#B87333",
        "accent-dark": "#8F5A26",
        background: "#F7F5F0",
        surface: "#FFFFFF",
        ink: "#1A1A1A",
        muted: "#6B6259",
        divider: "#E2DDD4",
        deep: "#1C1B18",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "4rem",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
}

