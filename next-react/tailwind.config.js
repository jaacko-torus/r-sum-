const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
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
			fontSize: {
				"xs": ["1rem", { lineHeight: "1.5rem" }],
				"sm": ["1.125rem", { lineHeight: "1.75rem" }],
				"base": ["1.25rem", { lineHeight: "1.75rem" }],
				"lg": ["1.5rem", { lineHeight: "2rem" }],
				"xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"2xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"3xl": ["3rem", { lineHeight: "1" }],
				"4xl": ["3.75rem", { lineHeight: "1" }],
				"5xl": ["4.5rem", { lineHeight: "1" }],
				"6xl": ["6rem", { lineHeight: "1" }],
				"7xl": ["8rem", { lineHeight: "1" }],
				"8xl": ["10rem", { lineHeight: "1" }],
				"9xl": ["11rem", { lineHeight: "1" }],
			},
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
		require("tailwindcss-opentype"),
	],
}
