/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        "main-green": '#13ADB7',
        'main-black': '#0F111D',
        'main-ash': '#7B7D8C',
      },
    },
  },
  plugins: [],
}
