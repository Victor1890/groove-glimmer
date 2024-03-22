const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm-custom': "0px 1px 2px 0px rgba(0, 0, 0, .06), 0px 1px 3px 0px rgba(0, 0, 0, .1)"
      },
      colors: {
        tertiary: "var(--colors-tertiary)",
        bgDefault: "#FDFBF6",
      },
      textColor: {
        "colors-text-secondary": "var(--colors-text-secondary)",
        fgDefault: "#242422",
      },
      flex: {
        0: "0 0 auto",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({

  })],
};
