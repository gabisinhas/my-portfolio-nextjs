/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        text: 'var(--color-text)',
        bg: 'var(--color-bg)',
      },
      fontFamily: {
        sans: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
