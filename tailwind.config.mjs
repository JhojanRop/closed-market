/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f1f9fe',
          100: '#e2f2fc',
          200: '#bfe5f8',
          300: '#87d0f2',
          400: '#47b9e9',
          500: '#29a9e0',
          600: '#1281b7',
          700: '#0f6695',
          800: '#11577b',
          900: '#144966',
          950: '#0d2f44',
        },
        secondary: {
          50: '#fbf7fd',
          100: '#f5edfa',
          200: '#eddef6',
          300: '#dfc4ee',
          400: '#d0a6e4',
          500: '#b779d3',
          600: '#a35bc2',
          700: '#8c48a8',
          800: '#753f8a',
          900: '#603370',
          950: '#421b50',
        },
        tertiary: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#a1a1a1',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },

      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
