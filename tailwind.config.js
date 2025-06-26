/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: ["0.5rem", { lineHeight: "0.75rem" }], // 8px
      sm: ["0.625rem", { lineHeight: "0.875rem" }], // 10px
      base: ["0.75rem", { lineHeight: "1rem" }], // 12px
      lg: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      xl: ["1rem", { lineHeight: "1.5rem" }], // 16px
    },
    extend: {
      spacing: {
        "page-height": "279.4mm", // 1121.57px
        "page-width": "215.9mm", // 793.7px
        13: "3.25rem", // 52px
        15: "3.75rem", // 60px
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        25: "6.25rem", // 100px
        26: "6.5rem", // 104px
        30: "7.5rem", // 120px
      },
    },
  },
  plugins: [],
}
