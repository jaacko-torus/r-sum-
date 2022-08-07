import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
	components: {
		MuiListItem: {
			defaultProps: {
				dense: true,
			},
		},
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: `"Gentium Book Basic"`,
		fontSize: 12,
		h1: { color: "#000000", fontSize: 60, fontVariantCaps: "small-caps" },
		h2: { color: "#000000", fontSize: 48, fontVariantCaps: "small-caps" },
		h3: { color: "#000000", fontSize: 34, fontVariantCaps: "small-caps" },
		h4: { color: "#000000", fontSize: 24 },
		h5: { color: "#000000", fontSize: 20 },
		h6: { color: "#000000", fontSize: 16 },
		body1: { color: "#666666", fontSize: 12 },
		body2: { color: "#666666", fontSize: 12 },
	},
})

export default theme
