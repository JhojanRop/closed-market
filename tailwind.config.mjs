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
        matisse: {
          50: '#f3f6fc',
          100: '#e6eef8',
          200: '#c8dbef',
          300: '#98bde1',
          400: '#609ad0',
          500: '#3c7ebb',
          600: '#2e69a8',
          700: '#244f80',
          800: '#21446b',
          900: '#203b5a',
          950: '#16253b',
        },
      },
    },
  },
  plugins: [],
};
