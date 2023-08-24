/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#737180",
        tertiary: "#0e141e",
        "black-100": "#111827",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        main: "#0682a6",
      },
      boxShadow: {
        card: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        tall: { raw: "(min-height: 650px)" },
      },
      backgroundImage: {
        main: "#0682a6",
        "hero-pattern": "url('/src/assets/herobg.png')",
        "section-pattern": "url('/src/assets/sectionbg.png')",
      },
    },
  },
  plugins: [],
};
