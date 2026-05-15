/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        surface: '#1A1A2E',
        magenta: '#E91E8C',
        cyan: '#00D4FF',
        green: '#00FF94',
        muted: '#8892A4',
        'text-secondary': '#B0C0D8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
