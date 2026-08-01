/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#0B1120',
        card: '#111827',
        accent: '#4F8BFF',
        glow: '#00D9FF',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(79, 139, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
