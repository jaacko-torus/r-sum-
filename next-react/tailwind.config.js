const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      fontFamily: {
				"gentium-book-basic": ["var(--font-gentium-book-basic)"],
				"gentium-book-plus": ["var(--font-gentium-book-plus)"],
				"gentium-plus": ["var(--font-gentium-plus)"],
				"fira-code": ["var(--font-fira-code)"],
				"sans": [fontFamily.sans],
				"mono": ["var(--font-fira-code)"],
      },
		},
  },
	plugins: [
		require('tailwindcss-opentype'),
	],
}
