import type { Config } from "tailwindcss";

const config: Config = {
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
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          50: "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          200: "var(--color-orange-200)",
          300: "var(--color-orange-300)",
          400: "var(--color-orange-400)",
          500: "var(--color-orange-500)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          800: "var(--color-orange-800)",
          900: "var(--color-orange-900)",
          DEFAULT: "var(--color-secondary)",
        },
        accent: {
          50: "var(--color-light-blue-50)",
          100: "var(--color-light-blue-100)",
          200: "var(--color-light-blue-200)",
          300: "var(--color-light-blue-300)",
          400: "var(--color-light-blue-400)",
          500: "var(--color-light-blue-500)",
          600: "var(--color-light-blue-600)",
          700: "var(--color-light-blue-700)",
          800: "var(--color-light-blue-800)",
          900: "var(--color-light-blue-900)",
          DEFAULT: "var(--color-accent)",
        },
        danger: {
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          300: "var(--color-red-300)",
          400: "var(--color-red-400)",
          500: "var(--color-red-500)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
          800: "var(--color-red-800)",
          900: "var(--color-red-900)",
          DEFAULT: "var(--color-danger)",
        },
        dark: "var(--color-dark)",
        light: "var(--color-light)",
      },
      fontFamily: {
        bluescreens: "var(--font-title-xl)",
        calibri: "var(--font-body)",
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      fontSize: {
        "title-xl": "var(--font-title-xl)",
        "title-lg": "var(--font-title-lg)",
        "title-md": "var(--font-title-md)",
      },
    },
  },
  plugins: [],
};

export default config;
